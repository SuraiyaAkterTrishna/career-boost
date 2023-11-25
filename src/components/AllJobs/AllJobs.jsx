import { useState,} from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const AllJobs = () => {
  const allJobs = useLoaderData();
  const [showOnsite, setShowOnsite] = useState(false);
  const [showRemote, setShowRemote] = useState(false);

  const handleShowOnsite = () => {
    setShowOnsite(true);
    setShowRemote(false);
  };

  const handleShowRemote = () => {
    setShowRemote(true);
    setShowOnsite(false);
  };

  // Filter jobs based on the showOnsite and showRemote state
  const filteredJobs = allJobs.filter(
    (job) =>
      (!showOnsite && !showRemote) ||
      (showOnsite && job.remote_or_onsite === "Onsite") ||
      (showRemote && job.remote_or_onsite === "Remote")
  );

  return (
    <div className="container mx-auto">
      <div className="text-right">
        <button
          className={`btn ${showOnsite ? "btn-primary" : ""} mr-4`}
          onClick={handleShowOnsite}
        >
          Show Onsite Jobs
        </button>
        <button
          className={`btn ${showRemote ? "btn-primary" : ""}`}
          onClick={handleShowRemote}
        >
          Show Remote Jobs
        </button>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-24">
        {filteredJobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
