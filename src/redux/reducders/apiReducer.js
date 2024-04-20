import { EDITDATA, EDITOBJ, GETUSEER } from "../types/type";

const defaultState={
    user:[],
    editobj:null,
    editData:{}

}
export const apiReducer=(state=defaultState,action)=>{
   switch (action.type) {
    case GETUSEER:
        console.log(action.data);
        return {
            user:action.data
        }
    case EDITOBJ:
        return {
            ...state,
            editobj:action.id
        }
    case EDITDATA:
        return {
            ...state,
            editData:action.obj
        }
   
    default:
        return state
   } 
}