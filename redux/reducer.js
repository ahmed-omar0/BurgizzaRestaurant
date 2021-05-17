import { FETCH_PIZZA_SUCCESS, FETCH_BURGER_SUCCESS, FETCH_DATA_FAILED,  FETCH_SINGLE_PRODUCT } from "./actionTypes"

export const initState = {
    pizza: [],
    burger: [],
    cart: [],
    erro: '',
    id: 0
}

export const reducer  = (state = initState , action) => {
    switch(action.type){
        case FETCH_PIZZA_SUCCESS:
            return{
                ...state,
                pizza: action.payload
            }
        case FETCH_BURGER_SUCCESS: 
            return {
                ...state,
                burger: action.payload
            }
        case FETCH_DATA_FAILED:
            return{ 
                ...state,
                error: action.payload
            }
        case FETCH_SINGLE_PRODUCT:
            return{
                ...state,
                id: action.payload
            }
        default : return state
    }
}