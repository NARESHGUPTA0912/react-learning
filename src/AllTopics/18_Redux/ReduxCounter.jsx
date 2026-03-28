/* eslint-disable no-unused-vars */
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./Counter";

// ! Step-2 create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
     
    incre: (prevState, action) => {
      console.log(action);
      
      return prevState + action.payload;
    },
     
    decre: (prevState, action) => {
      console.log(action);
      
      return prevState>0 ? prevState - 1: 0;
    },
     
    reset: (prevState, action) => {
      console.log(action);
      
      return ( prevState = 0 );
    },
  },
});

export let {incre, decre, reset} = counterSlice.actions;

//! Step-1 create a store
const myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const ReduxCounter = () => {
  return (
    <Provider store={myStore}>
      <Counter />
    </Provider>
  );
};

export default ReduxCounter;
