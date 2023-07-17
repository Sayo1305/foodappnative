import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      foodName : "",
      foodAmount : 0,
      foodAddress : "",
      foodAddressPicode: "",
}
const CartSlice = createSlice({
      name : 'cartslice',
      initialState,
      reducers : {
            AddFood : (state , action) => {
                  state.user = action.payload;
            },
            AddAmount : (state, action ) => {
                  state.foodAmount += 1;
            },
      },
})