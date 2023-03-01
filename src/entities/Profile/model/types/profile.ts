import { Currency, Country } from 'shared/conts/commont';

export interface Profile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileShema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
