import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const AllJobs = () => {
    const jobs = useLoaderData();
    return (
        <div className="container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {
                jobs.map(job =><Job
                    key={job.id}
                    job = {job}
                ></Job>)
            }
        </div>
    );
};

export default AllJobs;