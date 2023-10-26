import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actionTypes/actionTypes"

export const addToCart = (product) =>{
    return {
        type:ADD_TO_CARD,
        payload:product
    }
}
export const removeFromCart = (product) =>{
    return {
        type:REMOVE_FROM_CARD,
        payload:product
    }
}