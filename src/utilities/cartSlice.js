import { createSlice } from "@reduxjs/toolkit";
//this syntax is given by redux only not made by us :)  its relaxing
const cartSlice=createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});
export const {addItem, removeItem, clearCart}= cartSlice.actions;
export default cartSlice.reducer;