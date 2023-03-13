import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';

// const obj ={todo:'gym', isCompleted:false}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoObj) => {
    setTodos((preState) => [...preState, todoObj])
    console.log(todoObj, 'obj')
  }
  const updateTodo = (value, index) => {
    setTodos((preState) => {
    const updatedTodos =  preState.map((item, ind) => {

        if (ind === index) {
          return {
            ...item, isCompleted: value
          }

        }
        return item;
      })
      return updatedTodos;
    })
    

  }

  return (
    <div className="App">
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
