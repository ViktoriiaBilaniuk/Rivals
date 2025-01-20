import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import { Layout } from './widgets/layout/ui';
import { Home } from './pages/home';
import { Tournaments } from './pages/tournaments';
import { CreateTournament } from './pages/create-tournament/ui';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'tournaments',
        children: [
          {
            path: 'all',
            element: <Tournaments type="all" />
          },
          {
            path: 'ongoing',
            element: <Tournaments type="ongoing" />
          },
          {
            path: 'finished',
            element: <Tournaments type="finished" />
          },
          {
            path: 'create',
            element: <CreateTournament />
          },
          {
            path: '',
            element: <Navigate to="all" />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
