import {createStore} from "redux";

let initialState = {
        searchItem:"",
        todo:[]
}


let appReducer = (state = initialState, action)=>{
    let copy = {...state};
    switch(action.type){
        case "change":
            copy.searchItem = action.payload;
            return copy;
        case "add":
            copy.todo=[...copy.todo, action.payload];
            copy.searchItem = "";
            return copy;
        default:
            return state
    }
}

let store = createStore(appReducer);

export default store;