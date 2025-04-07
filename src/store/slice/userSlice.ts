import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: string | null;
  isLoggedIn: boolean;
  isEmailVerified: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  isEmailVerified: false,
};
// This slice manages user authentication and profile information
// including login status and email verification status.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isEmailVerified = false;
    },
    authStatus: (state) => {
      state.isLoggedIn = true;
    },
  },
});
export const { setUser, logout, authStatus, setEmailVerified } = userSlice.actions;
export default userSlice.reducer; // This is the reducer function that will be used in the store
// to manage the user state.