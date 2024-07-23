import { configureStore } from '@reduxjs/toolkit';
import {postsApiSlice} from "./apiSlices/posts.slice.ts";
import {usersApi} from "./apiSlices/users.slice.ts";


// Create the Redux store
const store = configureStore({
    reducer: {
        // Add the RTK Query reducer
        [postsApiSlice.reducerPath]: postsApiSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApiSlice.middleware, usersApi.middleware),
    devTools: import.meta.env.MODE !== 'production', // Enable Redux DevTools in development
});

// Export the store's types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;
