import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actionTypes/actionTypes";

const initialState = {
    cart:[],
};

const productReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CARD:
            return{
                ...state,
                cart:[...state.cart, action.payload],
            };
        case REMOVE_FROM_CARD:
            return{
                
                
            };
            
    
        default:
            return state;
    }
};

export default productReducer;