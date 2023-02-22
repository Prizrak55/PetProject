import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterReducer', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.decrement()))
      .toEqual({ value: 9 });
  });
  test('increment', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state as CounterSchema, counterActions.increment()))
      .toEqual({ value: 11 });
  });
  test('empty', () => {
    expect(counterReducer(undefined, counterActions.increment()))
      .toEqual({ value: 1 });
  });
});
