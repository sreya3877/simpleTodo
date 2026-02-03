import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening', isCompleted: false},
  {id: 2, title: 'Rent the movie for tomorrow movie night', isCompleted: false},
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isCompleted: false,
  },
  {id: 4, title: 'Drop the parcel at Bloomingdale', isCompleted: false},
  {id: 5, title: 'Order fruits on Big Basket', isCompleted: false},
  {id: 6, title: 'Fix the production issue', isCompleted: false},
  {id: 7, title: 'Confirm my slot for Saturday Night', isCompleted: false},
  {id: 8, title: 'Get essentials for Sunday car wash', isCompleted: false},
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    inputValue: '',
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.filter(todo => todo.id !== id),
    }))
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    }))
  }

  updateTodoTitle = (id, newTitle) => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  addTodo = () => {
    const {inputValue, todosList} = this.state
    if (inputValue.trim() === '') {
      return
    }

    const words = inputValue.trim().split(' ')
    const lastWord = words[words.length - 1]
    const count = Number.parseInt(lastWord, 10)

    const isValidNumber = !Number.isNaN(count) && count > 0

    const title = isValidNumber ? words.slice(0, -1).join(' ') : inputValue

    const numberOfTodos = isValidNumber ? count : 1

    const newTodos = []

    for (let i = 0; i < numberOfTodos; i += 1) {
      newTodos.push({
        id: todosList.length + newTodos.length + 1,
        title,
        isCompleted: false,
      })
    }

    this.setState({
      todosList: [...todosList, ...newTodos],
      inputValue: '',
    })
  }

  render() {
    const {todosList, inputValue} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>

          <div className="add-todo-container">
            <input
              type="text"
              value={inputValue}
              onChange={this.onChangeInput}
              placeholder="Enter todo"
            />
            <button type="button" onClick={this.addTodo}>
              Add
            </button>
          </div>

          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
