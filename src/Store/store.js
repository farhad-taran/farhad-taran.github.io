import {createStore} from 'redux'

const initialState = {
    repos:[],
    showSidebar:false
}

const reducer = (state=initialState,action)=>{
    if(action.type == 'repos'){
        return {
            ...state,
            repos:action.payload
        }
        
    }

    if(action.type == 'hide'){
        return {
            ...state,
            showSidebar:false
        }
    }

    if(action.type == 'toggle'){
        if(state.showSidebar == false) {
            return {
                ...state,
                showSidebar:true
            }
        }
        return {
            ...state,
            showSidebar:false
        }
    }
    
    return state
    
}



const store = createStore(reducer)

export default store

