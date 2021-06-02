import { FETCH_PIZZA_SUCCESS , FETCH_PIZZA_FAILED, ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART } from './pizzaActionTypes';

export const fetchPizzaSuccess = (pizza) => {
    return {
        type: FETCH_PIZZA_SUCCESS,
        payload: pizza
    }
}
export const fetchPizzaFailed = (error) => {
    return {
        type: FETCH_PIZZA_FAILED,
        payload: error
    }
}
export const addPizzaToCart = (pizza) => {
    return{
        type: ADD_PIZZA_TO_CART,
        payload: pizza
    }
}
export const removePizzaFromCart = (pizza) => {
    return{
        type: REMOVE_PIZZA_FROM_CART,
        payload: pizza
    }
}