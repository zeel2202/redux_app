import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const state = useSelector(state=>state)
  
   console.log(state);
  return (
    <div>
        <h2>Counter{state.counter.count}</h2>
       {
        state.arayObj.aray.map((x)=>{
          return(
            <h3>{x.name}</h3>
          )
        })
       }
    </div>
  )
}

export default Counter