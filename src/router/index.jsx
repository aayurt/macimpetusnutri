import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import MasterLayout from '../layouts/masterLayout';
import Post from '../pages/post';
import About from '../pages/about';
import Contact from '../pages/contact';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts/:id',
        element: <Post />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact-us',
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
