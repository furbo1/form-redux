import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from "create-store";

const myaction = () =>{
  return{
    type:"ALL_Data",
    payload: {name:"Alex"}
  }
}

const myreducer =( state = 0 ,action) =>{
  if(action.type === 'ALL_Data'){
    return {...action.payload}
  }
}

createStore(myreducer)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
