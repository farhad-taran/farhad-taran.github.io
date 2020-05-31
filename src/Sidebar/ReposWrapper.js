import React,{Component} from 'react'
import Repo from './Repo'
import './ReposWrapper.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'
import {connect} from 'react-redux'
import {postTypes} from '../constants'


class ReposWrapper extends Component {
    state={
        page:1,
        perPage:30,
        hasMore:true,
        reposList:[],
        userName:'farhad-taran'
    }


    sortResults = arr => {
        const sorted = arr.sort((a,b) => {
           return new Date(b.created_at) - new Date(a.created_at);
        });

        return sorted
    }

    mapPost = (el, postType) => {
        if(el.description === null || el.description === '')
        {
            console.log(el.html_url);
            return null;
        }
        return {
            name: el.description,
            fetchedContent: null,
            id: el.id,
            url: el.url,
            html_url: el.html_url,
            created_at: new Date(el.created_at).toLocaleDateString(),
            updated_at: new Date(el.updated_at).toLocaleDateString(),
            postType: postType,
            files: el.files,
            readMe: postType === postTypes.gist ?
            `https://gist.githubusercontent.com/${this.state.userName}/${el.id}/raw/README.md` :
            `https://raw.githubusercontent.com/${this.state.userName}/${el.name}/master/README.md`              
        }
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
                    
                    var topPost = { 
                        created_at: new Date().toLocaleDateString(),
                        fetchedContent: null,
                        files: undefined,
                        html_url: "https://github.com/farhad-taran/farhad-taran.github.io",
                        id: "254476713",
                        name: "How this blog was built and hosted on Github and Gists as a static site, using only React and Redux",
                        postType: "github",
                        readMe: "https://raw.githubusercontent.com/farhad-taran/farhad-taran.github.io/master/README.md",
                        updated_at: "4/18/2020",
                        url: "https://api.github.com/repos/farhad-taran/farhad-taran.github.io",
                    };

                    var gists = res.data.map(el => this.mapPost(el,postTypes.gist));
                    var githubs = response.data.map(el => this.mapPost(el,postTypes.github));
                    var replacedPosts = [...gists,...githubs].filter(el => el !== null && el.id != topPost.id);
                    const sortedArr = this.sortResults(replacedPosts);
                    var allPosts = this.state.reposList.concat(sortedArr);

                    allPosts.unshift(topPost);

                    this.setState({reposList: allPosts},() => {
                        this.props.storeRepos(allPosts);
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
           return <Repo name={el.name} key={el.id} id={el.id} url={el.url} created_at={el.created_at} />
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