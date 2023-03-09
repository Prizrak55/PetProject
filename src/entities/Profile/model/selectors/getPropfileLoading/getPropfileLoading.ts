import { StateSchema } from 'app/providers/StorePropvider';

export const getPropfileLoading = (state: StateSchema) => state.profile?.isLoading;
