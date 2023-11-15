import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import App from './App';
import PageNotFound from './components/PageNotFound/PageNotFound';
 
 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound></PageNotFound>,
  },
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
