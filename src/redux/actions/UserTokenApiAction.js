import axios from "axios"
import { ADDUSER, EDITDATA, EDITOBJ, GETUSEER } from "../types/type"
import { type } from "@testing-library/user-event/dist/type"

export let auth = { headers: { Authorization: "Bearer 0a5dd53d67b9ec24b96e00ff6013b569ff4240b133270a2b1d97716215a54507" } }

export const getUserAction =  () => {
    return (dispatch) => {
        axios.get("https://gorest.co.in/public/v2/users",auth).then((res)=>{
            dispatch({type:GETUSEER,data:res.data})
        })
    }
}
export const addUserAction =  (obj) => {
    return (dispatch) => {
        axios.post("https://gorest.co.in/public/v2/users",obj,auth).then((res)=>{
           dispatch(getUserAction())
        })
    }
}
export const deleteUserAction =  (id) => {
    return (dispatch) => {
        axios.delete("https://gorest.co.in/public/v2/users/"+id,auth).then((res)=>{
           dispatch(getUserAction())
        })
    }
}
export const editUserAction =  (obj,id) => {
    return (dispatch) => {
        axios.put("https://gorest.co.in/public/v2/users/"+id,obj,auth).then((res)=>{
           dispatch(getUserAction())
        })
    }
}

export const editObjaction=(id)=>{
    return(dispatch)=>{
        dispatch({type:EDITOBJ,id:id})
    }
}
