import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        totalAmount: 0,
        isEmpty: true
    },
    reducers: {
        increaseInCart(state, action){

            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            existingItem.quantity++
            existingItem.totalPrice += existingItem.price
            state.totalAmount += existingItem.price
            state.totalQuantity++
        },

        reduceInCart(state, action){
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if(existingItem.quantity === 1) return;
            existingItem.quantity--
            existingItem.totalPrice -= existingItem.price
            state.totalAmount -= existingItem.price
            state.totalQuantity--
        },

        addProduct(state, action){
            const productIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.totalQuantity+=action.payload.quantity
            state.totalAmount += action.payload.totalPrice
            state.isEmpty = false
            if(productIndex !== -1){
                state.cartItems[productIndex].quantity += action.payload.quantity

            } else{
                state.cartItems.push(action.payload)
            }
        },

        emptyCart(state, action){
            state.cartItems = action.payload;
            state.totalQuantity = 0
            state.totalAmount = 0
            state.isEmpty = true;
        },
        removeFromCart(state, action){
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            state.cartItems = state.cartItems.filter(item => item.id !== id)
            state.totalQuantity -= existingItem.quantity
            state.totalAmount -= existingItem.totalPrice
            if (state.totalQuantity === 0){
                state.isEmpty = true
                state.totalAmount = 0
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice