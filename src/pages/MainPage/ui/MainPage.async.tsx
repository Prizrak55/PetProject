import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Имитация
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
