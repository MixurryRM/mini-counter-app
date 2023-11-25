import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [counter,setCounter] = useState(10)

  useEffect(() => {
    if(counter > 0){
      const interval = setInterval(
        () => {setCounter(counter - 1 )},1000 
      )
      return () => {
        clearInterval(interval)
      }
    }
  },[counter]);

  return (
    <div className='container'>{counter}</div>
  )
}

export default App