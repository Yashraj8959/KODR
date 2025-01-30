import { useState,useEffect } from 'react'
import './App.css'

function App() {
  // const [todos, settodos] = useState([{
  //   id: 1,
  //   title: 'Buy milk',
  //   description: 'for making milkshake',
  //   completed: false
  // }])
  // const handleClick = () => {
  //   settodos([...todos, {
  //     id: todos.length + 1,
  //     title: 'Buy eggs',
  //     description: 'for making omelette',
  //     completed: false
  //     }])
  // }

  const [count, setcount] = useState(1)
  let currentValue =0;
  const change = ()=> {
    setcount(count + 1)
  }
  useEffect(
    () => {
      console.log('useEffect called')
      setInterval(change
      , 1000)
    },
    []
  )
  // setInterval(setcount(count + 1))

  return (
    <>
      <div className="app">
        {/* <input type="text" name="" value={todos.title} onChange={settodos.title.target.value} placeholder='Task' id="" />
        <input type="text" name="" placeholder='Description' id="" />
        <button onClick={handleClick}>Add Task</button> */}
        {count}
        {/* <button onClick={change}>Click me</button> */}
      </div>
    </>
  )
}

export default App
