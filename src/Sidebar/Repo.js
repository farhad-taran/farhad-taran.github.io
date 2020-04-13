import React from 'react'
import "./Repo.css"
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const repo = props => {


    return(
        <NavLink className="repo" to={`/repo/${props.id}`} onClick={props.hideSideBar} > {props.name}</NavLink>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        hideSideBar: ()=> dispatch({type:'close'})
    }
}


export default connect(null,mapDispatchToProps)(repo)