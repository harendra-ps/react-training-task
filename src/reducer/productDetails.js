import { GET_PRODUCT_DETAILS, ERROR_IN_PRODUCT_DETAILS } from '../actions/constant';

const initialState = {
    details: [],
    loading: true,
    message: ''
}

export default function productDetailsReducer(state = initialState, action) {
    switch(action.type){
        case GET_PRODUCT_DETAILS: return {
            details: action.payload,
            loading: false,
            message: 'SUCCESS'
        }
        case ERROR_IN_PRODUCT_DETAILS: return {
            details: action.payload,
            loading: false,
            message: 'FAILURE'
        }
        default: return state
    }
}