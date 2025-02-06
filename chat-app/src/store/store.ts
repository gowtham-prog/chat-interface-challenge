import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        chat: chatReducer
    }
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
