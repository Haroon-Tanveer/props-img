
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [first, setFirst] = useState(0)

  const handleClick =()=> {
    setFirst(first+1)

  }

  return (
    <>
    <Card count={first} name="haroon" handleClick={handleClick}>
      <h1>HAroon TAnveer </h1>
      <p>Para Graph</p>
      <h4>haroon Tanveer</h4>
    </Card>
    
    </>
  )
}

export default App
