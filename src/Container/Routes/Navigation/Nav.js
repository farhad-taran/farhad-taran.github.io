import React,{Fragment} from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'

const nav = ()=> {
    return(
        <Fragment>
            <input type="checkbox" name="checkbox-nav" id="checkbox-nav"></input>    
            <div className="navbar">
                <main id="main-content">
                    <label htmlFor="checkbox" className="check-box">
                        <span className="line line1"></span>
                        <span className="line line3"></span>
                        <span className="line line2"></span>
                    </label>
                </main>
                <main id="nav-icon">
                    <label htmlFor="checkbox-nav" className="checkbox-nav-icon">
                        <span className="line line1"></span>
                        <span className="line line3"></span>
                        <span className="line line2"></span>
                    </label>
                </main>
                <div className="nav-links">
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                    <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                    <NavLink className="nav-link" to="/repo"> Repository </NavLink>
                </div>
                <div className="nav-links-lg">
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                    <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                    <NavLink className="nav-link" to="/repo"> Repository </NavLink>
                </div>
                
                
            </div>
        </Fragment>
    )
}

export default nav