import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/home.page';
import Layout from './components/templates/layout.template';

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
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}