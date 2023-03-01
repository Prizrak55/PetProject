import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/conts/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = ''
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue :string}>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      console.log(response.data);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
