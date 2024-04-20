import { DECREMENT, INCREMENT } from "../types/type"

export const incrementAction=(num)=>{
    
    return (dispatch)=>{
        dispatch({type:INCREMENT,num:num})
    }
}
export const decrementAction=(num)=>{

    return (dispatch)=>{
        dispatch({type:DECREMENT})
    }
}