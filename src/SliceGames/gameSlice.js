import { createSlice } from '@reduxjs/toolkit';
import { gameApi } from '../AppApi/Api';
const initialState = {
  user: null,
  isLogin: false
};

const mySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLogin = false;
    },
  },extraReducers: (builder) =>{
    builder.addMatcher(gameApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    });
  }
});

export const { logout } = mySlice.actions;

export default mySlice.reducer;