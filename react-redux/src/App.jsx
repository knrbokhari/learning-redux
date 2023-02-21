import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrementAction, incrementAction, resetAction } from './services/actions/counterAction'

function App() {
  const count = useSelector(state => state.count)
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

export default App
