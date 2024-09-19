import { useState } from 'react'
import './App.css'

function App() {
  const userName = "Nitesh"
  const [count , setCount] = useState(15)

  function addNumber() {
    setCount(count + 1)
    if(count == 20){
      alert("Limit Reached")
      setCount(20)
    }

    console.log(count)
  }
  
  function subtractNumber() {
    setCount(count - 1)
    if(count <= 0){
      alert("Limit Reached")
      setCount(0)
    }
    
  }


  return (
    <>
    <div className='container'>
     <h1>Counter Web Page</h1>
     <h2>Welcome {userName}</h2>
     <p>Count: {count}</p>
     <button
     onClick={addNumber}
     >Increament</button>
     <button
     onClick={subtractNumber}
     >Decreament</button>
    </div>
    </>
  )
}

export default App
