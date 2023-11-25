import { useLoaderData } from "react-router-dom";
import "./JobDetail.css";

import salary_icon from "../../assets/icons/money.png";
import title from "../../assets/icons/calendar.png";
import phone from "../../assets/icons/phone.png";
import email from "../../assets/icons/email.png";
import address from "../../assets/icons/location2.png";
import { useState } from "react";

const JobDetail = () => {
  const job = useLoaderData();
  const [isApplied, setIsApplied] = useState(false);

  if (!job) {
    return <div>Loading...</div>;
  }
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
  } = job;

const handleApplyNowBtn = () => {
  setIsApplied(true);
}
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold pb-16">Job Details</h1>
      <hr />
      <div className="py-16 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <p className="text-gray-500 leading-8">
            <span className="font-bold text-black">Job Description:</span>{" "}
            {job_description}
          </p>
          <p className="text-gray-500 leading-8">
            <span className="font-bold text-black">Job Responsibility:</span>{" "}
            {job_responsibility}
          </p>
          <p className="text-gray-500 leading-8">
            <span className="font-bold text-black">
              Educational Requirements:
            </span>{" "}
            <br />
            {educational_requirements}
          </p>
          <p className="text-gray-500 leading-8">
            <span className="font-bold text-black">Experiences:</span> <br />
            {experiences}
          </p>
        </div>

        <div>
          <div className="bg-gray-200 rounded-lg p-8">
            <h4 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-2">Job Details</h4>
            <div className="flex items-center">
              <img className="h-6 mr-1" src={salary_icon} alt="" />
              <p className="text-gray-500 leading-8">
                <span className="font-bold text-black">Salary:</span> {salary}
              </p>
            </div>
            <div className="flex">
              <img className="h-6 mr-1" src={title} alt="" />
              <p className="text-gray-500 leading-8 mb-4">
                <span className="font-bold text-black">Job Title:</span>{" "}
                {job_title}
              </p>
            </div>

            <h4 className="text-xl font-bold mb-2 border-b-2 border-gray-300 pb-2">Contact Information</h4>
            <div className="flex items-center">
              <img className="h-6 mr-1" src={phone} alt="" />
              <p className="text-gray-500 leading-8">
                <span className="font-bold text-black">Phone:</span>{" "}
                {job.contact_information.phone}
              </p>
            </div>
            <div className="flex items-center">
              <img className="h-6 mr-1" src={email} alt="" />
              <p className="text-gray-500 leading-8">
                <span className="font-bold text-black">Email:</span>{" "}
                {job.contact_information.email}
              </p>
            </div>
            <div className="flex items-center">
              <img className="h-6 mr-1" src={address} alt="" />
              <p className="text-gray-500 leading-8">
                <span className="font-bold text-black">Address:</span>{" "}
                {job.contact_information.address}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button onClick={handleApplyNowBtn} className="btn-common w-full">{isApplied ? "Applied" : "Apply Now"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
