import { DeepPartial } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StorePropvider';
import { getLoginUsername } from '../selectors/getLoginUsername/getLoginUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234444'))).toBe({ username: '1234444' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('pass'))).toBe({ password: 'pass' });
  });
});
