import './App.css';
import React, { useState , useRef, useEffect} from 'react'
import Header from './components/Header';
import Form from './components/Form';
import {fetchTodos} from './components/backend';

const baseURL = "http://localhost:8000/todos/";

export default function App() 
{

  // const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchTodos(setTodos)
  }, []);

  return (
    <div className="App">
        <div className="list">
            <Header
            todos={todos}/>
        </div>
        <h1>Create a ToDo</h1>
        <div>
            <Form
            setTodos={setTodos}
            inputRef={inputRef}/>
        </div>
    </div>
  );
}