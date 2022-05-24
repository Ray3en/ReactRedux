import { createStore, combineReducers, applyMiddleware } from "redux"
import { countReducer } from "./countReducer"
import { emplReducer } from "./emplReducer"

// Работа с local storage
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

// Работа с асинхронностью 
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer = combineReducers({
    count: countReducer,
    empl: emplReducer
})

const persistCinfig = {
    key: 'test',
    storage,
    version: 3
}

const persitedReducer = persistReducer(persistCinfig, rootReducer)


export const store = createStore(persitedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)