import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction, resetAction } from '../services/actions/counterAction'
import '../App.css'

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="card">
        <p>{count}</p>
        <button onClick={() => dispatch(incrementAction())}>
          Increment 
        </button>
        <button onClick={() => dispatch(decrementAction())}>
          Decrement
        </button>
        <button onClick={() => dispatch(resetAction())}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter