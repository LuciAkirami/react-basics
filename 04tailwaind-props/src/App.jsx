import { useState } from 'react'
import './App.css'
import Card from './components/Card'

// Check Card.jsx to view about props

function App() {

  return (
    <>
      <h1 className='bg-yellow-400 p-4 rounded-xl text-black mb-4'>Henlo</h1>
      {/* Here we are passing props to our Cards */}
      <Card 
        product="Macbook" 
        btnText="Write"
      
      />
      <Card 
        product="Windows" 
      />
    </>
  )
}

export default App
