import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementAction, incrementAction } from '../redux/actions/counterAction'

function Comp1() {
    const dispatch = useDispatch()
  return (
   <>
    <button onClick={()=>dispatch(incrementAction(20))}>increment</button>
    <button onClick={()=>dispatch(decrementAction())}>decrement</button>
    
   </>
  )
}

export default Comp1