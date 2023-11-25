import { useEffect, useState } from "react";
import Job from "../Job/Job";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Retrieve applied job IDs from local storage
    const appliedJobIds =
      JSON.parse(localStorage.getItem("appliedJobIds")) || [];

    // Retrieve job details for each applied job ID
    const fetchAppliedJobs = async () => {
      const jobsResponse = await fetch("jobs.json");
      const jobs = await jobsResponse.json();

      const appliedJobsData = appliedJobIds.map((jobId) => {
        return jobs.find((job) => job.id === jobId);
      });

      setAppliedJobs(appliedJobsData);
    };

    fetchAppliedJobs();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold pb-16">Applied Jobs</h1>
      <br />
      <hr />

      {appliedJobs.length === 0 ? (
        <p className="text-center text-gray-500 my-24">
          No applied jobs available.
        </p>
      ) : (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-24">
          {appliedJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;

