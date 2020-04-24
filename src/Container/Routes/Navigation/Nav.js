import React,{Component,Fragment} from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
import sidebarIcon from './icon.svg'
import navbarIcon from './icon-2.svg'
import {connect} from 'react-redux'

class Nav extends Component {

    state={
        showNav:false
    }

    toggleNav = ()=> {
        if(this.state.showNav == false){
            this.setState({showNav:true})
        }
        else {
            this.setState({showNav:false})
        }
        
    }

    hideNav = ()=> {
        this.setState({showNav:false});
    }

    render(){
        return(
            <Fragment>
                <input type="checkbox" checked={this.state.showNav} name="checkbox-nav" id="checkbox-nav"></input>    
                <div className="navbar">
                    <main id="main-content">
                        <label htmlFor="checkbox" className="check-box" onClick={this.props.toggleSidebar} >
                            <img src={sidebarIcon} alt="sidebar icon" className="sidebar-icon" />
                        </label>
                    </main>
                    <main id="nav-icon" onClick={this.toggleNav}>
                        <label htmlFor="checkbox-nav" className="checkbox-nav-icon">
                        <img src={navbarIcon} alt="sidebar icon" className="navbar-icon" />
                        </label>
                    </main>
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/about" onClick={this.hideNav}> About </NavLink>
                        {/* <NavLink className="nav-link" to="/contact" onClick={this.hideNav}> Contact </NavLink>
                        <NavLink className="nav-link" to="/repo" onClick={this.hideNav}> Repository </NavLink> */}
                    </div>
                    <div className="nav-links-lg">
                        <NavLink className="nav-link" to="/about"> About </NavLink>
                        {/* <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                        <NavLink className="nav-link" to="/repo"> Repository </NavLink> */}
                    </div>
                    
                    
                </div>
            </Fragment>
        )
        
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: ()=> dispatch({type:'toggle'})
    }
}

export default connect(null,mapDispatchToProps)(Nav)