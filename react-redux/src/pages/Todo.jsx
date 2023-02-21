import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todoReqActions'

const Todo = () => {
    const todo = useSelector(state => state.todos)
    console.log(todo)
    const dispatch = useDispatch()
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Todo List</h2>
        <button onClick={() => dispatch(getAllTodos())}>fatch todo</button>
        {todo.todos?.map(i => (
            <p key={i.id}>{i?.title}</p>
        ))}
    </div>
  )
}

export default Todo