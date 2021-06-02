// Redux
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// DevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// Persistor
import { persistStore , persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// axios
import axios from 'axios';
// Reducer & Actions
import { rootReducer } from './rootReducer';
import { fetchPizzaSuccess , fetchPizzaFailed } from './pizza/pizzaActions';
import { fetchBurgerSuccess, fetchBurgerFailed } from './burger/burgerActions';

const persistorConfig = {
    key: 'root',
    storage,
    whiteList: ['pizzaCart', 'burgerCart'],
}
const persistedReducer = persistReducer(persistorConfig , rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk),));
export const persistor = persistStore(store);

function fetchPizzaData () {
    return  (dispatch) => {
        axios.get('https://burgizza-api.herokuapp.com/pizzas')
        .then((res) => {
            const pizza = res.data
            dispatch(fetchPizzaSuccess(pizza))
        })
        .catch(err => dispatch(fetchPizzaFailed(err)))
    }
}
function fetchBurgerData () {
    return (dispatch) => {
        axios.get('https://burgizza-api.herokuapp.com/burgers')
        .then((res) =>{
            const burger = res.data
            dispatch(fetchBurgerSuccess(burger))
        })
        .catch(err => dispatch(fetchBurgerFailed(err)))
    }
}
store.dispatch(fetchPizzaData());
store.dispatch(fetchBurgerData());

store.subscribe(() => true);