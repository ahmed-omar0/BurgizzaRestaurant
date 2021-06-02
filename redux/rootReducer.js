import {combineReducers} from 'redux';
import {pizzaReducer} from './pizza/pizzaReducer';
import {burgerReducer} from './burger/burgerReducer';

export const rootReducer = combineReducers({
    Pizza: pizzaReducer,
    Burger: burgerReducer
})