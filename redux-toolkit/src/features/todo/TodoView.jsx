import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './todoSlice'

const TodoView = () => {
    const {todos, isLoading, error} = useSelector(state => state.todos)
    console.log(todos)
    const dispatch = useDispatch()
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Todo List</h2>
        <button onClick={() => dispatch(fetchData())}>fatch todo</button>
        {isLoading && <h2>Loading...</h2>}
        {error && <p>{error}</p>}
        {todos?.map(i => (
            <p key={i.id}>{i?.title}</p>
        ))}
    </div>
  )
}

export default TodoView