import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './utils/ROUTES';
import { HomePage } from './pages/home-page';
import { EditUserPage } from './pages/edit-user-page';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />
  },
  {
    path: ROUTES.EDIT_USER,
    element: <EditUserPage />
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);