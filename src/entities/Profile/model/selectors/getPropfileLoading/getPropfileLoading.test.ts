import { render, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StorePropvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getPropfileLoading } from './getPropfileLoading';

describe('getPropfileLoading', () => {
  test('should true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getPropfileLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getPropfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
