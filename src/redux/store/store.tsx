import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/CartSlice";
import storeSlice from "../slices/storeSlice";


export const store=configureStore({
    reducer:{
        cartSlice,
        storeSlice,
    }

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch