import React from 'react'

export default function TodoList() {
    const todos = [
        { id: 1, string: 'Learn React' },
        { id: 2, string: 'Build a Todo App' },
        { id: 3, string: 'Master JavaScript' },
    ]
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((t)=><li key={t.id}>{t.string}</li>
        )}
      </ul>
    </div>
  )
}
