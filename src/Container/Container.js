import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Repo from './Routes/RepoRoute'
import Nav from './Routes/Navigation/Nav'
import './Container.css'


const container = props => {
    return(
        <div className="container">

            <Nav />
            <Switch className="routes"> 
                <Route path="/about" component={About} ></Route>
                <Route path="/contact" component={Contact} ></Route>
                <Route path="/repo/:id" component={Repo} ></Route>
                <Redirect from="/" to="about" />

            </Switch>
        </div>
    )
}

export default container