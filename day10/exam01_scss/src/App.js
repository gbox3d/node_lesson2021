import './App.css';
import './myui.scss'
// eslint-disable-next-line
import React, { useState } from 'react'
import { Route, Switch,NavLink } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact';
import Detail from './views/Detail';
import Exam02 from './views/Exam02CondiRender';
import Exam03 from './views/Exam03Axios';
import Exam04 from './views/Exam04UseEffect';
import Exam05 from './views/Exam05Redux';

function App() {

  return (
    <div className="App">

      <div className="myui nav">
        <ul>
          <li> <NavLink exact to="/" >Home</NavLink> </li>
          <li> <NavLink to="/about" >About</NavLink> </li>
          <li> <NavLink to="/contact">Conact</NavLink> </li>
          <li> <NavLink to="/exam02">exam02</NavLink> </li>
          <li> <NavLink to="/exam03">exam03</NavLink> </li>
          <li> <NavLink to="/exam04">exam04</NavLink> </li>
          <li> <NavLink to="/exam05">exam05</NavLink> </li>
        </ul>
      </div>

      <Switch>        
        <Route path="/contact" component={Contact} ></Route>  
        <Route path="/about" component={About} ></Route>    
        <Route path="/exam02" component={Exam02}></Route>
        <Route path="/exam03" component={Exam03}></Route>
        <Route path="/exam04" component={Exam04}></Route>
        <Route path="/exam05" component={Exam05}></Route>
        <Route path="/:id" component={Detail} ></Route>
        <Route path="/" component={Home} ></Route>
      </Switch>

    </div>
  );
}

export default App;
