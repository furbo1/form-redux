import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import './App.css';
// import Header from './components/Header/Header'
// import Contact from './components/Contact/Contact'
// import About from './components/About/About'
import store from '../src/store/store'


class App extends React.Component {
  state={
    name:'Alex',
    lname: 'Cocan'
  }

  func = (e)=>{
    this.setState({
      name: e.target.value
    })
  }


  newFunc = (e) => {

    this.setState({
      lname: e.target.value
    })
  }

  submitForm = (e) =>{
    e.preventDefault()
    store.dispatch({
      type:"Login_Data",
      payload: this.state
    })
  }
  
  
  
  render(){
      return(


        <div>
          <input type='text' onChange={this.func}/>
          <input type='text' onChange={this.newFunc}/>
          {/* {this.state.name}
          {this.state.lname} */}
          <button onClick={this.submitForm}>Submit</button>
        </div>
        //  <BrowserRouter>
        //  <Route exact path='/' component={Header}/>
        //  <Route exact path='/about' component={About}/>
        //  <Route exact path='/contact' component={Contact}/>
                  
                  
                
         
        //  </BrowserRouter>

     
      )
  }
}

export default App