import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "helpers/fetcher";

const blankUser = {
  uid: "",
  email: "",
  provider: "",
  id: 0,
  name: "",
  allowPasswordChange: false
}

const blankToken = {
  client: "",
  accessToken: "",
  tokenHash: "",
  expiry: 0
}

const initialState = {
  loggedIn: false,
  loading: false,
  status: "",
  user:  blankUser,
  token: blankToken
}

export const login = createAsyncThunk("auth/login", async (user) => {
  const res = await fetcher.post("http://localhost:3001/auth/sign_in", user);
  return res
});

export const logout = createAsyncThunk("auth/logout", async (data) => {
  const res = await fetcher.authDelete("http://localhost:3001/auth/sign_out", data);
  return res;
});

export const signup = createAsyncThunk("auth/signup", async (user) => {
  const res = await fetcher.post("http://localhost:3001/auth", user);
  return res;
});

// TODO: Notifications on successful/failed account actions

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const {user, token} = action.payload;
        state.user = user
        state.token = token
        state.loading = false
        state.loggedIn = true
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = blankUser;
        state.token = blankToken;
        state.loggedIn = false;
        state.loading = false;
      })
      .addCase(signup.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(logout.rejected, (state) => {
        state.status = "failed";
      })
  }
})

export default authSlice.reducer;
