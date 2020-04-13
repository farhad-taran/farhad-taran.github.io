import {createStore} from 'redux'

const initialState = {
    repos:[],
}

const reducer = (state=initialState,action)=>{
    if(action.type == 'repos'){
        return {
            ...state,
            repos:action.payload
        }
        
    }
    
    return state
    
}



const store = createStore(reducer)

export default store

