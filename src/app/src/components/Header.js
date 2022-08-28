import React from 'react'

function Header({todos}) {
  return (
    <div className="header">
        <h1>Todo-Lists</h1>
        <ul className='list-group list-group-horizontal' id='ul-element'>
          {todos.map((child) => (<li key={child.title}>{child.title}</li>))}
        </ul>
    </div>
  )
}

export default Header