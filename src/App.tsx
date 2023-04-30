import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/home.page';
import Layout from './components/templates/layout.template';
import ProfilLayout from './components/templates/profil.template';
import ProfilVisiMisi from './components/pages/profilVisiMisi.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
    ]
  },
  {
    path: '/profil',
    element: <ProfilLayout />,
    children: [
      {
        path: '/profil',
        element: <ProfilVisiMisi />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}