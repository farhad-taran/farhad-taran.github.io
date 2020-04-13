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
        repos:[],
        totalList:[],
        hasMore:true
    }

    
    
    componentDidMount(){
        const {page,perPage} = this.state;
        axios.get(`https://api.github.com/users/Colt/repos?page=${page}&per_page=${perPage}&sort=updated`)
        .then(response => {
            this.setState({repos:response.data,totalList:response.data},()=> {
                this.props.storeRepos(this.state.totalList)
            });
            axios.get(`https://api.github.com/users/Colt/gists?page=${page}&per_page=${perPage}`)
            .then(res => {
                this.setState({totalList:this.state.totalList.concat(...res.data)},()=> {
                    this.props.storeRepos(this.state.totalList)
                })

            })

        })

        
        
    }



    loadNext = ()=> {
        this.setState(prevState=> ({page:prevState.page +1}),()=> {
            axios.get(`https://api.github.com/users/Colt/repos?page=${this.state.page}&per_page=${this.state.perPage}&sort=updated`)
            .then(response => {
                if(response.data.length == 0){
                    this.setState({
                        hasMore:false
                    })
                    return
                }
                this.setState({
                    repos:this.state.repos.concat(...response.data),
                    totalList:this.state.totalList.concat(...response.data)
                })
                this.props.storeRepos(this.state.totalList);
                console.log(this.state.page);
                axios.get(`https://api.github.com/users/Colt/gists?page=${this.state.page}&per_page=${this.state.perPage}`)
                .then(res => {
                    this.setState({
                        totalList:this.state.totalList.concat(...res.data)
                    })
                    this.props.storeRepos(this.state.totalList);
                })
            })
        })
    }

    

    render(){

        const renderRepos = this.state.totalList.map(el => {
           return <Repo name={el.name?el.name : el.description} key={el.id} id={el.id} url={el.url} />


           
        })

        return(
            <div className="reposWrapper" id={`target${this.props.scrollable}`}>
                <InfiniteScroll 
                dataLength={this.state.totalList.length}
                next={this.loadNext}
                scrollableTarget={`target${this.props.scrollable}`}
                hasMore={this.state.hasMore}
                loader={<LoadingSpinner/>}>
                     {renderRepos} 
                </InfiniteScroll>  
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        storeRepos: (reposPayload)=> dispatch({type:'repos',payload:reposPayload})
    }
    
}

export default connect(null,mapDispatchToProps)(ReposWrapper)