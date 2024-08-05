import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div className='wd-full h-screen' style={{backgroundColor:color}}>
      {/* inset-x-0 is necessary to place the element in the center. fixed implies posiiton is fixed */}
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 '> 
        <div className="flex flex-wrap gap-3 shadow-lg bg-black px-3 py-4 rounded-xl">
          <button className='bg-red-700 text-white p-2 rounded-lg w-20' onClick={() => setColor("Red")}>
            Red
          </button>
          <button className='bg-blue-700 text-white p-2 rounded-lg w-20' onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className='bg-yellow-700 text-white p-2 rounded-lg w-20' onClick={() => setColor("yellow")}>
            Yellow
          </button>
          <button className='bg-green-700 text-white p-2 rounded-lg w-20' onClick={() => setColor("green")}>
            Green
          </button>
          <button className='bg-teal-700 text-white p-2 rounded-lg w-20' onClick={() => setColor("teal")}>
            Teal
          </button>
        </div>
      </div>
      {/* <div className='absolute left-1/2 transform -translate-x-1/2 bottom-5'>
        <h1>Henlo 2</h1>
      </div> */}
    </div>
    </>
  )
}

export default App

// refreshing will set the state of the "color" variable back to "white", hence we see white color when we refresh