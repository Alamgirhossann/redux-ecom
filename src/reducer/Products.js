import * as actions from '../action-type/Action-type';

const initialState = {
    product: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_PRODUCT: 
        return{
            ...state, 
            product:
               action.payload
            
        }
        default: return state;
    }
}

export const singleProducerReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.SINGLE_PRODUCT: 
        return{
            ...state, 
           ...action.payload
            
        }
        case actions.REMOVE_PRODUCT:
            return{}
        default: return state;
    }
}

