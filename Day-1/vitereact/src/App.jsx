import Navbar from './Navbar'

function Demo(){
  return(
    <>
    <a href="http://google.com" target="_blank">Visit Google</a>
    </>
  )
}

function Sum(){
  return(
    <>
    <h1>Sum of two numbers is: {2+3}</h1></>
  )
}

function App() {

  return (
    <>
    <Navbar />
    <Demo />
    <Sum />
    </>
  )
}

export default App
