import { createBrowserRouter } from 'react-router-dom';
import MasterLayout from '../layouts/masterLayout';
import Home from '../pages/home';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Router;
