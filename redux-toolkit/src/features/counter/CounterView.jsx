import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

const CounterView = () => {
  const count =  useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment 
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default CounterView