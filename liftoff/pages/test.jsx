import React from 'react'
import useFetch from 'use-http'
import { useState ,useEffect } from 'react'



function  test() {
    const [todos, setTodos] = useState({})
  const { get, post, response, loading, error } = useFetch('http://127.0.0.1:8000')

  useEffect(() => { initializeTodos() }, []) // componentDidMount
  
  async function initializeTodos() {
    const initialTodos = await get('/')
    if (response.ok) setTodos(initialTodos)
  }

  async function addTodo() {
    const newTodo = await get('/todos')
    if (response.ok) setTodos(newTodo)
  }
  return (
    <div>
      {JSON.stringify(todos.message)}
    </div>
  )

}

export default test