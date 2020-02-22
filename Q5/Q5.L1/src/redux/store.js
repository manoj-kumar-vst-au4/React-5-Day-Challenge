import {createStore} from "redux";

let initialState = {
        marvel:["Thor","Hulk","Iron-Man","Hawk-Eye","Black-Widow","Captain-America"]
}


let appReducer = (state = initialState, action)=>{
    switch(action.type){
        default:
            return state
    }
}

let store = createStore(appReducer);

export default store;