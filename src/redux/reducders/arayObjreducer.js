import { ADD, DELETE, EDIT } from "../types/type";

const defaultState={
    aray:[],
}
export const arrayObjReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ADD:
            console.log(action.obj);
            state.aray.push(action.obj)
            return{
                aray:[...state.aray]
            };
        case DELETE:
            console.log(action.id);
            state.aray.splice(action.id,1)
            return{
                aray:[...state.aray]
            };
        case EDIT:
            console.log(action.id);
            state.aray.splice(action.id,1,action.obj)
            return{
                aray:[...state.aray]
            };
    
        default:
            return state;
    }

}