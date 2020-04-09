import React from 'react'
import ReposWrapper from './ReposWrapper'
import './Sidebar.css'
import githubLogo from './github.png'
import {connect} from 'react-redux'

const sidebar = props=> {
    let style;
    if(window.matchMedia("(max-width: 870px)").matches){
         style = props.showSideBar === true ? {display:'block',visiblity:'visible',opacity:'1'} : {display:'none',visiblity:'hidden',opacity:'0'};
    }

    
    
    return(
        <div className="sidebar" style={style}>
            <h1 className="close" onClick={props.hideSideBar}>X</h1>
            <p className="myRepos" > <img src={githubLogo} alt="github" className="logo" /> Repositories</p>
            <ReposWrapper />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showSideBar:state.showSideBar
    }
}

const mapDispathToProps = dispatch => {
    return {
        hideSideBar:()=> dispatch({type:'close'})
    }
}


export default connect(mapStateToProps,mapDispathToProps)(sidebar)