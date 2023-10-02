import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetcher } from 'helpers/fetcher';

const blankUser = {
  uid: '',
  email: '',
  provider: '',
  id: 0,
  name: '',
  allowPasswordChange: false
}

const blankToken = {
  client: '',
  accessToken: '',
  tokenHash: '',
  expiry: 0
}

const initialState = {
  loggedIn: false,
  loading: false,
  user:  blankUser,
  token: blankToken
}

export const login = createAsyncThunk('auth/postLogin', async (user) => {
  const res = await fetcher.post('http://localhost:3001/auth/sign_in', user);
  return res
});

export const logout = createAsyncThunk('auth/postLogout', async (data) => {
  const res = await fetcher.delete('http://localhost:3001/auth/sign_out', {}, {
      'Content-Type': 'application/json',
      'uid': data.uid,
      'client': data.client,
      'access-token': data.token
    }
  );
  return res;
});

export const authSlice = createSlice({
  name: 'counter',
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
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = blankUser;
        state.token = blankToken;
        state.loggedIn = false;
        state.loading = false;
      })
  }
})

// export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
