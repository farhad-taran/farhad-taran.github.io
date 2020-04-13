import React,{Component} from 'react';
import './App.css';
import Container from './Container/Container'
import Sidebar from './Sidebar/Sidebar'



class App extends Component {

  render(){

    return (
      <div className="App">
        <Sidebar />
        <Container />
      </div>
    )
    
  }

}

export default App
