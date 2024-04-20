import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction, editDataaction, editObjaction, getUserAction } from '../redux/actions/UserTokenApiAction'
import { EDITDATA } from '../redux/types/type';

function TableApi() {

const state=useSelector(state =>state)
console.log(state.users.user);
const dispatch=useDispatch()

const deleteData=(id)=>{
    dispatch(deleteUserAction(id))
}

const editdata=(id)=>{
    // dispatch(editObjaction(id))
    let editobj = state.users.user.find((x)=>x.id === id)
    console.log(editobj);
    dispatch({type:EDITDATA,obj:editobj})
}
    
  return (
    <table className="table">
                <thead>
                    <tr>
                        <th> name</th>
                        <th>email</th>
                        <th>Gender</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.users.user.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <td>{x.name}</td>
                                    <td>{x.email}</td>
                                    <td>{x.gender}</td>
                                    <td>{x.status}</td>
                                    <td>
                                        <button className='btn btn-warning'onClick={()=>editdata(x.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => deleteData(x.id)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
  )
}

export default TableApi