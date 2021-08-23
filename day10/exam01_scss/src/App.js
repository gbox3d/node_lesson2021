import './App.css';
import './myui.scss'
import React, { useState } from 'react'
import { Route, Switch,NavLink } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact';

function App() {

  return (
    <div className="App">

      <div className="myui nav">
        <ul>
          <li> <NavLink exact to="/" >Home</NavLink> </li>
          <li> <NavLink to="/about" >About</NavLink> </li>
          <li> <NavLink to="/contact">Conact</NavLink> </li>
        </ul>
      </div>

      <Switch>        
        <Route path="/contact" component={Contact} ></Route>  
        <Route path="/about" component={About} ></Route>        
        <Route path="/" component={Home} ></Route>
      </Switch>

    </div>
  );
}

export default App;
