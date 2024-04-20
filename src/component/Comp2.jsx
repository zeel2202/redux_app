import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addindObj, deleteObj, editObj } from '../redux/actions/arayObjAction'

function Comp2() {
    const dispatch = useDispatch()
    const obj={
        name:"oscar",
        phone:5884
    }
    const state = useSelector(state=>state)
    console.log(state.arayObj.aray);
  return (
    <div>
        <h1>comp 2</h1>
        <h2>{JSON.stringify(state.arayObj.aray)}</h2>
        <button onClick={()=>dispatch(addindObj(obj))}>ADD</button>
        <button onClick={()=>dispatch(deleteObj(1))}>DELETE</button>
        <button onClick={()=>dispatch(editObj(2,{name:"career"}))}>EDIT</button>
    </div>
  )
}

export default Comp2