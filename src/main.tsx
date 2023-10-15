import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './authentication/login';
import Register from './authentication/register';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/auth/login",
    element: <Login/>,
  },
  
  {
    path: "/auth/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
