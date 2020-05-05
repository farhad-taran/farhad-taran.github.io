import React,{Component} from 'react'
import axios from'axios'
import './RepoRoute.css'
import {connect} from 'react-redux'
import Spinner from './Spinner'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import { postTypes } from '../../constants'

class Repo extends Component {

    state = {
        showMarkDown: false,
        repos:this.props.repos,
        src:'',
        created:'',
        updated:'',
        name: ''  
    }

    fetchPost = props => {
        
        const fetchedRepo = this.state.repos.filter(el => {
            return el.id == props.match.params.id
        })[0];       

        this.setState({
            name: fetchedRepo.name,
            src:fetchedRepo.html_url,
            created:fetchedRepo.created_at,
            updated:fetchedRepo.updated_at,
            showMarkDown: false,
        })

        if(fetchedRepo.fetchedContent != null){
            this.props.hideSpinner();
            this.setState({
                fetchedContent:fetchedRepo.fetchedContent,
                showMarkDown: true
            }) 
            return;
        }

        if(fetchedRepo.postType === postTypes.github){
            axios.get(fetchedRepo.readMe)
            .then(res => {
                this.props.hideSpinner();
                fetchedRepo.fetchedContent = res.data
                this.setState({
                    fetchedContent:res.data,
                    showMarkDown: true
                })                
            })
        }

        if(fetchedRepo.postType === postTypes.gist){
            Object.keys(fetchedRepo.files).forEach(key => {                    
                        if(key.includes('.md')){
                            axios.get(fetchedRepo.files[key].raw_url)                            
                           .then(res => {
                               this.props.hideSpinner();
                               fetchedRepo.fetchedContent = res.data
                               this.setState({
                                   fetchedContent:res.data,
                                   showMarkDown: true
                               })
                           })
                            
                        }                    
                 })
        }
    }

    componentDidMount(){
        if(this.props.repos.length == 0 ){
            this.props.history.replace('/about')
        }
        else {
            this.fetchPost(this.props)
        }    
    }

    componentWillReceiveProps(nextProps){
        this.fetchPost(nextProps)               
     }

    render(){
        let style = this.state.showMarkDown ? {visibility:'visible',opacity:'1',transition:'all 0.3s'} : {visibility:'hidden',opacity:'0',transition:'all 0.3s'} 
        return(
            <div className="repoRoute" style={style}>
                <Spinner />
                {this.state.fetchedContent && !this.state.fetchedContent.startsWith('#') && <h3>{this.state.name}</h3>}
                <ReactMarkdown source={this.state.fetchedContent} escapeHtml={true} renderers={{ code: CodeBlock }} />

                <div className="repo-details">
                    <span className="postDates"> Created at: {this.state.created}</span>
                    <a target="_blank" href={this.state.src}  className="sourceLink" >Source</a>
                </div>

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
        hideSpinner: ()=> dispatch({type:'hideSpinner'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Repo)