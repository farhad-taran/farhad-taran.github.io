import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'
import axios from'axios'
import './RepoRoute.css'
import {connect} from 'react-redux'





class Repo extends Component {

    state={
        readMe:'',
        repos:this.props.newState.repos,
        src:'',
        created:'',
        updated:''  
    }

    componentDidMount(){
        if(this.props.newState.repos.length == 0 ){
            this.props.history.replace('/about')
        }

        else {
            const fetchedRepo = this.state.repos.filter(el => {
                return el.id == this.props.match.params.id
             })
             this.setState({
                 src:fetchedRepo[0].html_url,
                 created:fetchedRepo[0].created_at,
                 updated:fetchedRepo[0].updated_at,
                 
             })

             if(fetchedRepo[0].name){
                axios.get(`${fetchedRepo[0].url}/readme`)
                .then(response => {
                    axios.get(`${response.data.download_url}`)
                    .then(res => {
                        this.setState({
                            readMe:res.data,
                        })
                    })
                    
                })
             }
             else {
                 const keysArr = Object.keys(fetchedRepo[0].files)
                 keysArr.forEach(key => {
                    
                        if(key.includes('.md')){
                           axios.get(`${fetchedRepo[0].files[key].raw_url}`)
                           .then(res => {
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
    
    }

    componentWillReceiveProps(nextProps){
        const fetchedRepo = this.state.repos.filter(el => {
            return el.id == nextProps.match.params.id
         })
         if(!fetchedRepo) return
         this.setState({
            src:fetchedRepo[0].html_url,
            created:fetchedRepo[0].created_at,
            updated:fetchedRepo[0].updated_at,
        })

         if(fetchedRepo[0].name){
            
            axios.get(`${fetchedRepo[0].url}/readme`)
            .then(response => {
                axios.get(`${response.data.download_url}`)
                    .then(res => {
                        this.setState({
                            readMe:res.data,
                            created:fetchedRepo[0].created_at,
                            updated:fetchedRepo[0].updated_at,
                        })
                    })       
            })  
         }

         else {
            this.setState({
                src:fetchedRepo[0].html_url
            })
            const keysArr = Object.keys(fetchedRepo[0].files)
            keysArr.forEach(key => {
               
                   if(key.includes('.md')){
                      axios.get(`${fetchedRepo[0].files[key].raw_url}`)
                      .then(res => {
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

 

    render(){
        

        return(
            <div className="repoRoute">
                <ReactMarkdown source={this.state.readMe} escapeHtml={true} />
            
                <p className="link-wrap"> created at {this.state.created} / updated at {this.state.updated} <br/> 
                for more information <a target="_blank" href={this.state.src}  className="link" >Click Here</a> </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        newState:state,
    }
}

export default connect(mapStateToProps,null)(Repo)