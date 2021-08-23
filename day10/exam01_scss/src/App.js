import './App.css';
import React, { useState } from 'react'


function App() {

  let red_btn = {
    backgroundColor: 'rgb(255,0,0)'
  }

  let [btn_color,btn_colorSet] = useState('blue')

  function changeColor() {
    console.log(btn_color)
    // btn_color = 'pink'
    btn_colorSet('pink')
  }

  return (
    <div className="App">
      <div className="myui nav">
        <ul>
          <li className="activate" > <a href="">item 1</a> </li>
          <li> <a href="">item 2</a> </li>
          <li> <a href="">item 3</a> </li>
        </ul>

      </div>
      <div>
        <button className="myui btn" >Normal</button>
        <button className="myui btn" style={red_btn}  >Cancel</button>
        <button className="myui btn"  style={ {
          backgroundColor : btn_color,
          padding : "32px 32px"
        } } onClick={changeColor} > Info </button>
      </div>
    </div>
  );
}

export default App;
