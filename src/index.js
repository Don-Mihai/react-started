import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import './styles/media.scss';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Wealth from './pages/Wealth/Wealth';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/wealth',
    element: <Wealth />,
  },
]);

root.render(<RouterProvider router={router} />);
