import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Main from './main/main';
import {useSelector, useDispatch} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <div className="App">
     <Main />
    </div>
    )
  }
}

export default App;
