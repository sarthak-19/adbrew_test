import axios from "axios"

const base_url = "http://localhost:8000/todos/"

export const fetchTodos = async (setTodoList) => {
  axios.get(base_url)
    .then(response => {console.log(response.data) ;setTodoList(response.data)})
    .catch(err => console.log(err))
} 

export const postTodo = async (newTodo, setTodoList) => {
  let statusCode = 0
  await axios.post(base_url,{title: newTodo})
  .then (res => {console.log(res.data);statusCode = res.status})
  .catch(err => console.log(err))
  
  if(statusCode === 200)
    setTodoList((oldArray) => [...oldArray, {title : newTodo}]);  
}