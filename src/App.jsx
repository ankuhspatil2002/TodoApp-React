import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="mainContainer">
      <Navbar />
      <div className="title">
        TODO LIST
      </div>
      <AddTodo />
    </div>
    </>
  )
}

export default App
