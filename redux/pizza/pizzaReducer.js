import { FETCH_PIZZA_SUCCESS, FETCH_PIZZA_FAILED, ADD_PIZZA_TO_CART, REMOVE_PIZZA_FROM_CART} from "./pizzaActionTypes";

const initState = {
    pizza: [],
    pizzaErro: '',
    pizzaCart: [],
    numOfPizzaInCart: 0
}

export const pizzaReducer  = (state = initState , action) => {
    switch(action.type){
        case FETCH_PIZZA_SUCCESS:
            return{
                ...state,
                pizza: action.payload
            }
        case FETCH_PIZZA_FAILED:
            return{ 
                ...state,
                pizzaError: action.payload
            }
        case ADD_PIZZA_TO_CART:
            // Check if Item is  already in cart
            const inCart = state.pizzaCart.find((item) => item.id === action.payload.id ? true : false)
            return{
                ...state,
                pizzaCart: inCart ? state.pizzaCart.map(item => item.id === action.payload.id ? {...item , quantity : item.quantity + 1} : item) 
                : [...state.pizzaCart, {...action.payload, quantity: 1}],
                numOfPizzaInCart: state.numOfPizzaInCart + 1
            }
        case REMOVE_PIZZA_FROM_CART:
            return{
                ...state,
                pizzaCart: state.pizzaCart.filter(item => item.id === action.payload.id ? null : item),
                numOfPizzaInCart: state.numOfPizzaInCart > 0 ? state.numOfPizzaInCart - action.payload.quantity : state.numOfPizzaInCart
            }
        default : return state
    }
}
