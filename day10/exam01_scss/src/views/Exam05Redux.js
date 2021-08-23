import React from 'react'

import { connect } from 'react-redux';

function connectToStore(state) {
    return {
        state: state
    }
}

const Exam05 = ({state,dispatch}) => {
    // console.log(props)
    return (
        <div>
            <h1>Redux</h1>
            <h2>{state.title}</h2>
            <h3>{state.count}</h3>
            <button className="myui btn" onClick={
                ()=> {
                    dispatch({type:'inc'})
                }
            }  >inc</button>
            <button className="myui btn" onClick={
                ()=> {
                    dispatch({type:'set',playload:100})
                }
            }  >set</button>
            
        </div>

    )
}

export default connect(connectToStore)(Exam05);