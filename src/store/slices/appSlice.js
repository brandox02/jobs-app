import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   user: null,
   accessToken: null
}

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setUser: (state, action) => {
         state.user = action.payload;
      },
      setAccessToken: (state, action) => {
         state.accessToken = action.payload;
      },
   }
});

export const { setAccessToken, setUser } = appSlice.actions;
export default appSlice.reducer;