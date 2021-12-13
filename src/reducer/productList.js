import { GET_PRODUCT_LIST, ERROR_IN_PRODUCT_LIST } from '../actions/constant';

const initialState = {
    Data: [],
    loading: true
}

export default function productListReducer(state = initialState, action) {
    switch(action.type){
        case GET_PRODUCT_LIST: return {
            Data: action.payload,
            loading: false
        }
        case ERROR_IN_PRODUCT_LIST: return {
            Data: action.payload,
            loading: false
        }
        default: return state
    }
}