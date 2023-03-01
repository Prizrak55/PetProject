import { DeepPartial } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StorePropvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLogingUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('user');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
