import { FETCH_BURGER_SUCCESS , FETCH_BURGER_FAILED , ADD_BURGER_TO_CART, REMOVE_BURGER_FROM_CART } from './burgerActionTypes';

export const fetchBurgerSuccess = (Burger) => {
    return {
        type: FETCH_BURGER_SUCCESS,
        payload: Burger
    }
}
export const fetchBurgerFailed = (error) => {
    return {
        type: FETCH_BURGER_FAILED,
        payload: error
    }
}
export const addBurgerToCart = (burger) => {
    return{
        type: ADD_BURGER_TO_CART,
        payload: burger
    }
}
export const removeBurgerFromCart = (burger) => {
    return{
        type: REMOVE_BURGER_FROM_CART,
        payload: burger
    }
}