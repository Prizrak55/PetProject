import { render, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StorePropvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLogingIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
