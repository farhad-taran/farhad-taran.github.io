import React from 'react'
import ReposWrapper from './ReposWrapper'
import './Sidebar.css'
import {connect} from 'react-redux'
 
const sidebar = props=> {
    return(
        <div>
        <input type="checkbox" checked={props.showSidebar}  name="checkbox" id="checkbox"></input>
        {/* {React.createElement('input',{type: 'checkbox',  defaultChecked: false, name:"checkbox", id:"checkbox"})} */}
        <aside id="sidebar">
              <header className="navbar-header">
                  <h1 className="myRepos" >Repositories</h1>
              </header>
              <main className="navbar-body">
                  <ReposWrapper scrollable="1" />
              </main>
          </aside>
          
        <aside id="sidebar-lg">
              <header className="navbar-header-lg">
                  <p className="myRepos-lg" >Repositories</p>
              </header>
              <main className="navbar-body-lg">
                  <ReposWrapper scrollabe="2" />
              </main>
          </aside>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showSidebar:state.showSidebar
    }
}

export default connect(mapStateToProps)(sidebar)