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
        perPage:20,
        repos:[],
        hasMore:true
    }

    
    
    componentDidMount(){
        const {page,perPage} = this.state;
        axios.get(`https://api.github.com/users/Colt/repos?page=${page}&per_page=${perPage}`)
        .then(response => {
            this.setState({repos:response.data},()=> {
                this.props.storeRepos(this.state.repos)
            });

        })
        
    }



    loadNext = ()=> {
        this.setState(prevState=> ({page:prevState.page +1}),()=> {
            axios.get(`https://api.github.com/users/Colt/repos?page=${this.state.page}&per_page=${this.state.perPage}`)
            .then(response => {
                if(response.data.length == 0){
                    this.setState({
                        hasMore:false
                    })
                    return
                }
                this.setState({
                    repos:this.state.repos.concat(...response.data)
                })
                this.props.storeRepos(this.state.repos);
                console.log(this.state.page);
            })
        })
    }

    

    render(){

        const renderRepos = this.state.repos.map(el => {
           return <Repo name={el.name} key={el.id} id={el.id} url={el.url} />


           
        })

        return(
            <div className="reposWrapper" id="target">
                <InfiniteScroll 
                dataLength={this.state.repos.length}
                next={this.loadNext}
                scrollableTarget="target"
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