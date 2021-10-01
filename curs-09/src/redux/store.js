// Avem nevoie de functia createStore din Redux pentru a crea un STORE
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Crearea store-ului se face pornind de la un reducer, deci trebuie sa il importam.
// In mod normal vom avea mai multi reduceri(vom vedea la cursul urmator) si va trebui
// sa ii combinam intr-un reducer principal, dar cum acum avem un singur reducer,
// el va fi reducerul principal.
import { cartReducer } from './reducers/cart';
import { userReducer} from './reducers/user';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

// Functia createStore primeste ca parametru reducerul principal si creaza store-ul.
const store = createStore(rootReducer, applyMiddleware(thunk));
// Store-ul are niste metode predefinite, dar pentru React vom folosi niste functii
// ajutatoare pentru a ne conecta cu store-ul.
console.log(store);

// exportam store-ul, pentru a putea fi utilizat in index.js
export default store;
