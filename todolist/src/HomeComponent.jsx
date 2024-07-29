import React, { useEffect, useState } from 'react'
import CreateComponent from './CreateComponent'
import axios from 'axios';

function HomeComponent() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <h2>To Do List</h2>
      <CreateComponent/>
      {
        todos.length === 0 ?
        <div>
          <p>No todos yet!</p>
        </div> :
        todos.map((todo, index) =>
          <div key={index}>
            <p>{todo.task}</p>
          </div>
        )
      }

    </div>
  )
}

export default HomeComponent
