import { render, screen } from '@testing-library/react';
import { StateSchema } from 'app/providers/StorePropvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from '../selectors/getProfileData/getProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileShema, Profile, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Russia,
  lastname: 'morozov',
  first: 'asd',
  city: 'mosk',
  currency: Currency.USD,
};

describe('profileSlice.test', () => {
  test('test readonly', () => {
    const state: DeepPartial<ProfileShema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileShema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test cancelEdin', () => {
    const state: DeepPartial<ProfileShema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileShema,
      profileActions.cancelEdin(),
    )).toEqual({
      readonly: true,
      validateError: undefined,
      data,
      form: data,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileShema> = { form: { username: '12' } };
    expect(profileReducer(
      state as ProfileShema,
      profileActions.updateProfile({
        username: '444',
      }),
    )).toEqual({
      form: { username: '444' },
    });
  });

  test('test updateProfile service pending', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileShema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test updateProfile service fullfiled', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileShema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
