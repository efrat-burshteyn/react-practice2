import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'



export default function TodoList() {
    const [todos,setTodos] = useState([
        'Learn React' ,
        'Build a Todo App' ,
        'Master JavaScript',
    ]);
    const [addTask,setAddTask] = useState('');

    return (
    <div>
      <h1>Todo List</h1>
        <form>
      <input type='text' placeholder='enter a new task:'
      value={addTask}
      onChange={(n)=>setAddTask(n.target.value)}/>
      <button type='submit'>אישור</button>
     </form>
      <ul>
        {todos.map((t,index)=><TodoItem key={index} task={t}/>
        )}
      </ul>

    </div>
  )
}

