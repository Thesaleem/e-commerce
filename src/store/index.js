import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productSlice from './productData'
import cartSlice from './cartSlice'


const persistConfig = {
    key: 'root',
    storage,
}
const roorReducer = combineReducers({
    cart: cartSlice.reducer,
    landingPage: productSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, roorReducer)

const store = configureStore({
    reducer: persistedReducer
})


export default store

export const persistor = persistStore(store)