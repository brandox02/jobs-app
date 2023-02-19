import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   user: null,
   accessToken: null,
   tmpDataBetweenScreens: null
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
      setTmpDataBetweenScreens: (state, action) => {
         state.tmpDataBetweenScreens = action.payload;
      },
   }
});

export const { setAccessToken, setUser, setTmpDataBetweenScreens } = appSlice.actions;
export default appSlice.reducer;