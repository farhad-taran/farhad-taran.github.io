import React,{Component} from 'react'
import Repo from './Repo'
import './ReposWrapper.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'
import {connect} from 'react-redux'



class ReposWrapper extends Component {
    state={
        page:1,
        perPage:30,
        hasMore:true,
        reposList:[],
        userName:'Colt'
    }


    sortResults = arr => {
        const sorted = arr.sort((a,b) => {
           return new Date(b.updated_at) - new Date(a.updated_at);
        });

        return sorted
    }

    totalList = ()=> {
        const dataArr = this.state.reposList.map(el => {
            return {
                name: el.description,
                id: el.id,
                url: el.url,
                html_url: el.html_url,
                created_at: el.created_at,
                updated_at: el.updated_at,
                isRepo: el.name ? true : false,
                isGist: el.name ? false : true,
                files: el.name ? null : el.files,
                readMe: el.name ? 
                `https://raw.githubusercontent.com/${this.state.userName}/${el.name}/master/README.md` : 
                `https://gist.githubusercontent.com/${this.state.userName}/${el.id}/raw/README.md`
            }
        })

        return dataArr
    }

    fetchLists = ()=> {
            const {page,perPage,userName} = this.state;
            const config = {headers:{'Authorization':'46a9a67a3916e43d88af94d6f817d4c8c87a6ddc'}}
            axios.get(`https://api.github.com/users/${userName}/repos?page=${page}&per_page=${perPage}&sort=updated`,config)
            .then(response => {
                if(response.data.length == 0){
                    this.setState({
                        hasMore:false
                    })
                    return
                }
                axios.get(`https://api.github.com/users/${userName}/gists?page=${page}&per_page=${perPage}`,config)
                .then(res => {
                    const sortedArr = this.sortResults([...response.data,...res.data]);
                    this.setState({reposList:this.state.reposList.concat(...sortedArr)},()=>{
                        this.props.storeRepos(this.totalList());
                    })
                    
                })
            })
    }


    componentDidMount(){
        this.fetchLists();
    }


    loadNext = ()=> {
        this.setState(prevState=> ({page:prevState.page +1}),this.fetchLists);
    }


    render(){
        const renderRepos = this.props.totalList.map(el => {
           return <Repo name={el.name} key={el.id} id={el.id} url={el.url} />
        })

        return(
            <div className="reposWrapper" id={`target${this.props.scrollable}`}>
                <InfiniteScroll 
                dataLength={this.props.totalList.length}
                next={this.loadNext}
                hasMore={this.state.hasMore}
                loader={<LoadingSpinner/>}>
                     {renderRepos} 
                </InfiniteScroll>  
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        totalList:state.fetchedData.reposList
    }
}

const mapDispatchToProps = dispatch => {

    return {
        storeRepos: (reposPayload)=> dispatch({type:'repos',payload:reposPayload})
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(ReposWrapper)