import { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import Job from "../Job/Job";
import { useNavigate } from "react-router-dom";

const FeaturedJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const handleSeeAllBtn = () => {
    navigate("/all-jobs");
  };
  return (
    <div className="my-24 container mx-auto">
      <h2 className="sub-header text-center mb-4">Featured Jobs</h2>
      <p className="banner-detail text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
        {jobs.map((job) => <Job key={job.id} job={job}></Job>).slice(0, 4)}
      </div>
      <div className="mt-8 text-center">
        <button onClick={handleSeeAllBtn} className="btn-common">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
