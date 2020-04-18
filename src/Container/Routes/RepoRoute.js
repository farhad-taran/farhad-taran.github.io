import React,{Component} from 'react'
import axios from'axios'
import './RepoRoute.css'
import {connect} from 'react-redux'
import Spinner from './Spinner'
import Markdown from './Markdown'



class Repo extends Component {

    state={
        readMe:'',
        repos:this.props.repos,
        src:'',
        created:'',
        updated:'',
        userName:'Colt'  
    }

    fetchRepo = props => {
        const fetchedRepo = this.state.repos.filter(el => {
            return el.id == props.match.params.id
         })[0];

         this.setState({
            src:fetchedRepo.html_url,
            created:fetchedRepo.created_at,
            updated:fetchedRepo.updated_at,
            
        })

        if(fetchedRepo.isRepo){
            axios.get(`${fetchedRepo.url}/readme`)
            .then(response => {
                axios.get(`${response.data.download_url}`)
                .then(res => {
                    this.props.hideSpinner();
                    this.props.showMarkDown();
                    this.setState({
                        readMe:res.data,
                    })
                })
                
            })
         }

    }

    fetchGist = props => {
        const fetchedRepo = this.state.repos.filter(el => {
            return el.id == props.match.params.id
         })[0];

         this.setState({
            src:fetchedRepo.html_url,
            created:fetchedRepo.created_at,
            updated:fetchedRepo.updated_at,
            
        })
        if(fetchedRepo.isGist){
            Object.keys(fetchedRepo.files).forEach(key => {                    
                        if(key.includes('.md')){
                            axios.get(fetchedRepo.files[key].raw_url)                            
                           .then(res => {
                               this.props.hideSpinner();
                               this.props.showMarkDown();
                               this.setState({
                                   readMe:res.data
                               })
                           })
                            
                        }
                        else {
                            return
                        }
                    
                 })
        }
    }

    componentDidMount(){
        if(this.props.repos.length == 0 ){
            this.props.history.replace('/about')
        }

        else {
            this.fetchRepo(this.props)
            this.fetchGist(this.props)
        }
    
    }

    componentWillReceiveProps(nextProps){

        this.fetchRepo(nextProps)
        this.fetchGist(nextProps)
               
     }

 

    render(){
        
        return(
            <div className="repoRoute">
                <Spinner />
                <Markdown source={this.state.readMe} />
                <p className="link-wrap"> created at {this.state.created} / updated at {this.state.updated} <br/> 
                for more information <a target="_blank" href={this.state.src}  className="link" >Click Here</a> </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        repos:state.fetchedData.reposList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideSpinner: ()=> dispatch({type:'hideSpinner'}),
        showMarkDown: ()=> dispatch({type:'showMarkDown'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Repo)