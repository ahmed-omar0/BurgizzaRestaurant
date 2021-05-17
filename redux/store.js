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
import { reducer } from './reducer';
import { fetchBurgerSuccess, fetchPizzaSuccess , fetchFailed} from './actions';

const persistorConfig = {
    key: 'root',
    storage,
    whitelist: ['cart' , 'id'],
}
const persistedReducer = persistReducer(persistorConfig , reducer);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk),));
export const persistor = persistStore(store);

function fetchPizzaData () {
    return  (dispatch) => {
        axios.get('https://burgizza-api.herokuapp.com/pizzas')
        .then((res) => {
            const pizza = res.data
            dispatch(fetchPizzaSuccess(pizza))
        })
        .catch(err => dispatch(fetchFailed(err)))
    }
}
function fetchBurgerData () {
    return (dispatch) => {
        axios.get('https://burgizza-api.herokuapp.com/burgers')
        .then((res) =>{
            const burger = res.data
            dispatch(fetchBurgerSuccess(burger))
        })
        .catch(err => dispatch(fetchFailed(err)))
    }
}
store.dispatch(fetchPizzaData());
store.dispatch(fetchBurgerData());

store.subscribe(() => true);