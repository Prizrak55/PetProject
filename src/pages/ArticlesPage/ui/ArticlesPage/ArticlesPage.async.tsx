import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Имитация
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
