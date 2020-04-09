import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar'
import Container from './Container/Container'
import menu from './Container/open-menu.svg'
import {connect} from 'react-redux'

function App(props) {

  let style;

  if(window.matchMedia("(max-width: 870px)").matches){
    style = props.showSideBar === true?{display:'none'} : {display:'block'};
}

  

  return (
    <div className="App">
      <Sidebar />
      <img src={menu} alt="" className="menu-icon" onClick={props.showSide} style={style} />
      <div className="filler"></div>
      <Container />
      <div className="filler"></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      showSideBar:state.showSideBar
  }
}

const mapDispathToProps = dispatch => {
  return {
      showSide:()=> dispatch({type:'show'})
  }
}


export default connect(mapStateToProps,mapDispathToProps)(App)
