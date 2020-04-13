import React from 'react'
import "./Repo.css"
import {NavLink} from 'react-router-dom'



const repo = props => {

    return(
        <NavLink className="repo" to={`/repo/${props.id}`} onClick={props.hideSideBar} > {props.name}</NavLink>
    )
}

export default repo