import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import AllJobs from "./components/AllJobs/AllJobs";
import JobDetail from "./components/JobDetail/JobDetail";
import Blogs from "./components/Blogs/Blogs";

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
        path: "job/:jobId",
        element: <JobDetail></JobDetail>,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`/jobs.json`);
            if (!response.ok) {
              throw new Error("Failed to fetch job data");
            }

            const jobs = await response.json();

            const jobId = parseInt(params.jobId);
            const job = jobs.find((j) => j.id === jobId);

            if (job) {
              return job;
            } else {
              throw new Error("Job not found");
            }
          } catch (error) {
            console.error("Error loading job data:", error);
            throw error;
          }
        },
      },
      {
        path: "all-jobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
