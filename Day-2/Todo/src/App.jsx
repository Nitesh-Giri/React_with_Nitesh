import { useState } from 'react'
import './App.css'

function App() {

   const [data, setData] = useState("")
   const [array , setArray] = useState([]);
   function addTodo(){
     setArray([...array , data])
     console.log(array)
   }

   function sub(){
    setArray(array.slice(0, -1))
    console.log(array)
   }

  return (
    <>
    <div className='container'>
     <h2>Learn about Redux Todo List</h2>
     <input className='input' type="text" onChange={(e) => setData(e.target.value)} placeholder='Enter Todo' value={data} /><br></br>
     <button className='primary' onClick={addTodo}>Add Todo</button>
     <button className='secondary' onClick={sub}>Remove Todo</button>
      <h4>Todo List</h4>

      {array.map((item) => <p>{item}</p>)}

      </div>
    </>
  )
}

export default App
