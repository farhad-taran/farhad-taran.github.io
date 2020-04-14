import React,{Component} from 'react'
import "./Repo.css"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'



class Repo extends Component {


    scrollToTop = ()=> {
        window.scrollTo(0,0);
        this.props.hideSidebar()
    }

    render(){
        return(
            <NavLink  className="repo" to={`/repo/${this.props.id}`} activeClassName="repo-active" onClick={this.scrollToTop} > {this.props.name}</NavLink>
        )
    }

    
}

const mapDispatchToProps = dispatch => {
    return {
        hideSidebar: ()=> dispatch({type:'hide'})
    }
}


export default connect(null,mapDispatchToProps)(Repo)