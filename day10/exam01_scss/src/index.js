import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

let _state =  {
  title : "foo",
  body : "bar",
  count : 0
}

function reducer(state = _state,action) {

  console.log(action)

  if(action.type === "inc") {

    let _cloneState = JSON.parse(JSON.stringify(state))
    _cloneState.count++
    return  _cloneState
  }
  else if(action.type === "set") {
    let _cloneState = JSON.parse(JSON.stringify(state))
    _cloneState.count = action.playload; //원하는값

    return _cloneState
  }
  else {
    return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* router */}
      <Provider store={store} > {/* redux */}
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
