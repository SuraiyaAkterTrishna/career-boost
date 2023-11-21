import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Main from './components/Layout/Main';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import AllJobs from './components/AllJobs/AllJobs';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "all-jobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch('jobs.json')
      }
    ]
  },
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
