import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import LoadingSpinner from './components/LoadingSpinner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/books',
        element: <Books/>
      },
      {
        path:'/loading',
        element: <LoadingSpinner/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
