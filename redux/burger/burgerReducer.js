import { 
        FETCH_BURGER_SUCCESS, 
        FETCH_BURGER_FAILED, 
        ADD_BURGER_TO_CART, 
        REMOVE_BURGER_FROM_CART
        } from "./burgerActionTypes";

const initState = {
    burger: [],
    burgerError: '',
    burgerCart: [],
    numOfBurgerInCart: 0
}

export const burgerReducer  = (state = initState , action) => {
    switch(action.type){
        case FETCH_BURGER_SUCCESS:
            return{
                ...state,
                burger: action.payload
            }
        case FETCH_BURGER_FAILED:
            return{ 
                ...state,
                burgerError: action.payload
            }
        case ADD_BURGER_TO_CART:
            // Check if Item is already in cart 
            const inCart = state.burgerCart.find(item => item.id === action.payload.id ? true : false)
            return{
                ...state,
                burgerCart: inCart ? state.burgerCart.map(item => item.id === action.payload.id ? {...item , quantity : item.quantity + 1} : item) 
                : [...state.burgerCart, {...action.payload , quantity: 1}],
                numOfBurgerInCart: state.numOfBurgerInCart + 1
            }
        case REMOVE_BURGER_FROM_CART:
            return{
                ...state,
                burgerCart: state.burgerCart.filter(item => item.id != action.payload.id ? item : null),
                numOfBurgerInCart: state.numOfBurgerInCart > 0 ? state.numOfBurgerInCart - action.payload.quantity : state.numOfBurgerInCart
            }
        default : return state
    }
}
