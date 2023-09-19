import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Header.jsx';
import Show from './Show.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Show></Show>,
    children:
      [
        {
          path: "/myhome",
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Home></Home>
        }
      ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
