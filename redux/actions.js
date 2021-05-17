import { FETCH_PIZZA_SUCCESS , FETCH_BURGER_SUCCESS, FETCH_DATA_FAILED , FETCH_SINGLE_PRODUCT } from "./actionTypes";

export const fetchPizzaSuccess = (pizza) => {
    return {
        type: FETCH_PIZZA_SUCCESS,
        payload: pizza
    }
}
export const fetchBurgerSuccess = (burger) => {
    return {
        type: FETCH_BURGER_SUCCESS,
        payload: burger
    }
}
export const fetchFailed = (error) => {
    return {
        type: FETCH_DATA_FAILED,
        payload: error
    }
}
export const fetchSingleProduct = (id) => {
    return {
        type: FETCH_SINGLE_PRODUCT,
        payload: id
    }
}

