import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      name : "",
      email  : "",
      userId : "",
      address : "",
      user : [],
}

const UserSlice = createSlice({
      name : "userslice",
      initialState ,
      reducers : {
            CreateUser : (state , action) => {
                  state.user = action.payload;
            },
            AddName : (state, action ) => {
                  state.name = action.payload;
            },
            AddEmail : (state, action ) => {
                  state.email = action.payload;
            },
      },
})

export const {CreateUser , AddName , AddEmail} = UserSlice.actions;
export default UserSlice.reducer;