import {createStore} from 'redux'

const initialState = {
    repos:[],
    showSideBar:false
}

const reducer = (state=initialState,action)=>{
    if(action.type == 'repos'){
        console.log(action.payload)
        return {
            ...state,
            repos:action.payload
        }
        
    }
    
    if(action.type == 'close'){
        
        return {
            ...state,
            showSideBar:false
        }
        
    }

    if(action.type == 'show'){
        
        return {
            ...state,
            showSideBar:true
        }
        
    }

    return state
    
}



const store = createStore(reducer)

export default store

