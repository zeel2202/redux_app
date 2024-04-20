import { ADD, DELETE, EDIT } from "../types/type"

export const addindObj =(obj)=>{
    return(dispatch)=>{
        dispatch({type:ADD,obj:obj})
    }
}
export const deleteObj =(id)=>{
    console.log(id);
    return(dispatch)=>{
        dispatch({type:DELETE,id:id})
    }
}
export const editObj =(id,obj)=>{
    console.log(id);
    return(dispatch)=>{
        dispatch({type:EDIT,id:id,obj:obj})
    }
}