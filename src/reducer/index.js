import { combineReducers } from "redux";
import {productReducer, singleProducerReducer} from '../reducer/Products';

const rootReducer = combineReducers({
    productReducer,
    singleProducerReducer
})

export default rootReducer;