import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:any={
    cartItems:[]
}
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart:(state,action:PayloadAction<any>)=>{
        const product = action.payload;
        const existingProduct = state.cartItems.findIndex((p:any) => p.id === product.id);
        if(existingProduct === -1||existingProduct.length===0){
            state.cartItems.push(product);
            console.log("item aadded to cart")
        }else{
            
        console.log("item already exist")
        }

    },
    removeFromCart:(state,action:PayloadAction<any>)=>{
        const product = action.payload;
        const filteredProducts = state.cartItems.filter((p:any) => p.id !== product.id);
        state.cartItems=filteredProducts
        console.log("item removed from cart")
    },
    emptyCart:(state)=>{
        state.cartItems=[];
        console.log("cart emptied")
    }
  },
});


export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
