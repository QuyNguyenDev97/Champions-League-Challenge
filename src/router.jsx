import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/home'));
const BaseLayout = React.lazy(() => import('./@layouts/baseLayout'));

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
