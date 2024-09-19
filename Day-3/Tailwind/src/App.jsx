import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind CSS</h1>
    <Card username="Nitesh Giri" btn="Click me" />
    <Card username="Rani Giri" btn="Visiti me" />
    </>
  )
}

export default App
