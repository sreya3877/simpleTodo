import React, {useState} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

export const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList)

  const onDeleteTodo = idToDelete => {
    const updatedList = todos.filter(todo => todo.id !== idToDelete)
    setTodos(updatedList)
  }

  return (
    <div className="simple-todo-container">
      <h1 className="heading">Simple Todos</h1>
      <ul className="todos-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todoDetails={todo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default SimpleTodos
