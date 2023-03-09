import { render, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StorePropvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return error', () => {
    const form = {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'morozov',
      first: 'asd',
      city: 'mosk',
      currency: Currency.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
