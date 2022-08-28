import React from 'react'
import {postTodo} from './backend';

// import {v4 as uuidv4} from 'uuid';
const Form= ({setTodos,inputRef})=> {
    const handleSetChildren = (e) => {
        e.preventDefault();
        const addItem = document.getElementById('input_todo').value;
        console.log(addItem)
        if(addItem)
        {
            // add to database
            postTodo(addItem,setTodos);
            inputRef.current.value = "";
        }
      };

    // const onInputChange= (e)=> {
    //     setInput(e.target.value);
    // }

    // const onFormSubmit= (e)=> {
    //     e.preventDefault();
    //     setTodos([...todos, {id: uuidv4(), title: input}]);
    // }
  return (
    <form>
        <div>
            <label for="todo">ToDo: </label>
            <input 
            id='input_todo' 
            type="text"
            placeholder="Enter a todo"
            ref={inputRef}
            />
        </div>
        <div style={{"marginTop": "5px"}}>
            <button onClick={handleSetChildren}  type="submit" >Add ToDo!</button>
        </div>
    </form>
  )
}

export default Form;