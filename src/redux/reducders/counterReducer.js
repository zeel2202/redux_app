import { DECREMENT, INCREMENT } from "../types/type";

const defaultState={
    count:0,
}

export const counterReducer=(state=defaultState,action)=>{
    console.log(state,action);
    switch (action.type) {
        case INCREMENT:
            
            return {
                count:action.num
            };
        case DECREMENT:
            
            return {
                count:state.count-1
            };
    
        default:
            return state;
    }
}