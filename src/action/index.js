import * as actions from '../action-type/Action-type';

export const addProduct = (data)=> {
    return{
        type: actions.ADD_PRODUCT,
        payload: data
    }
}

export const singleProduct = (id)=> {
    return{
        type: actions.SINGLE_PRODUCT,
        payload: id
    }
}

export const removeProduct = ()=> {
    return{
        type: actions.REMOVE_PRODUCT,
       }
}