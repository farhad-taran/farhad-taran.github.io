import React from 'react'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Repo from './Routes/RepoRoute'
import './Container.css'


const container = props => {
    return(
        <div className="container">
            <div className="navbar">
                <NavLink className="nav-link" to="/about"> About </NavLink>
                <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                <NavLink className="nav-link" to="/repo/main"> Repository </NavLink>
            </div>
            <Switch> 
                <Route path="/about" component={About} ></Route>
                <Route path="/contact" component={Contact} ></Route>
                <Route path="/repo/:id" component={Repo} ></Route>
                <Redirect from="/" to="about" />

            </Switch>
        </div>
    )
}

export default container