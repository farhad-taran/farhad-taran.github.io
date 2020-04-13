import React from 'react'
import ReposWrapper from './ReposWrapper'
import './Sidebar.css'

const sidebar = ()=> {
    return(
        <div>
        <input type="checkbox" name="checkbox" id="checkbox"></input>
        {/* {React.createElement('input',{type: 'checkbox',  defaultChecked: false, name:"checkbox", id:"checkbox"})} */}
        <aside id="sidebar">
              <header className="navbar-header">
                  <p className="myRepos" >Repositories</p>
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

export default sidebar