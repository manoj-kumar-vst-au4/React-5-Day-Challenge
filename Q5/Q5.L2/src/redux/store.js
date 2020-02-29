import {createStore} from "redux";

let initialState = {
        searchItem:"Hi i am Manoj."
}


let appReducer = (state = initialState, action)=>{
    let copy = {...initialState};
    switch(action.type){
        case "change":
            copy.searchItem = action.payload;
            return copy;
        default:
            return state
    }
}

let store = createStore(appReducer);

export default store;