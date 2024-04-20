import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction, auth, editUserAction, getUserAction } from '../redux/actions/UserTokenApiAction'
import axios from 'axios'

function FormApi() {
    const [obj, setobj] = useState({})
    const [blankObj, setBlankObj] = useState({})
    const dispatch= useDispatch()
    const state = useSelector(state=>state)

    console.log(state.users.editobj);

    const getdata = (e) => {
        obj[e.target.name] = e.target.value
        blankObj[e.target.name] = ""
        setobj({ ...obj })
        setBlankObj({ ...blankObj })
    }
    
    const savedata=()=>{
        if(obj.id === undefined){
            dispatch(addUserAction(obj))
        }else{
            dispatch(editUserAction(obj,obj.id))
        }
        setobj({...blankObj})
    }
    // useEffect(() => {
    //   if(state.users.editobj){
    //     axios.get("https://gorest.co.in/public/v2/users/"+state.users.editobj,auth).then((res)=>{
    //         console.log(res.data);
    //         setobj({...res.data})
    //     })
    //   }
    // }, [state.users.editobj])

    useEffect(() => {
      setobj({...state.users.editData})
    }, [state.users.editData])
    
    
  return (
    <div> <form action="" className="w-50 mx-auto shadow p-3" >
    <label className="d-block"> Name</label>
    <input
        type="text"
        name="name"
        className="w-100"
        onChange={getdata}
        value={obj.name}
    />
    <label className="d-block">email</label>
    <input
        type="email"
        name="email"
        className="w-100"
        onChange={getdata}
        value={obj.email}
    />

    <label className="d-block">gender</label>
    <input
        type="radio"
        name="gender"
        className=""
        onChange={getdata}
        value={"male"}
        checked={obj.gender === 'male'}
    />  male
    <input
        type="radio"
        name="gender"
        className=""
        value={"female"}
        onChange={getdata}
        checked={obj.gender === 'female'}
    />female <br />
    <label className="d-block">Status</label>
    <input
        type="radio"
        name="status"
        className=""
        onChange={getdata}
        value={"active"}
        checked={obj.status === 'active'}
    />  active
    <input
        type="radio"
        name="status"
        className=""
        value={"inactive"}
        onChange={getdata}
        checked={obj.status === 'inactive'}
    />inactive <br />

    <button className='btn btn-success' type="button" onClick={savedata}>Save</button>
</form></div>
  )
}

export default FormApi