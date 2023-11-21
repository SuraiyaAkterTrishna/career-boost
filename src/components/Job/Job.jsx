import "./Job.css";
import location2 from '../../assets/icons/location2.png';
import money from '../../assets/icons/money.png';

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card-compact border">
        <div className="p-12">
          <img className="w-32 h-10" src={logo} />
          <h2 className="card-title category-title mt-2">{job_title}</h2>
          <p className="banner-detail mb-2">{company_name}</p>
          <div>
            <button className="secondary-btn mr-4">{remote_or_onsite}</button>
            <button className="secondary-btn">{job_type}</button>
          </div>
          <div className="flex my-2">
            <div className="flex">
                <img className="h-6" src={location2} alt="" />
                <p className="banner-detail mr-4">{location}</p>
            </div>
            <div className="flex">
                <img className="h-6" src={money} alt="" />
                <p className="banner-detail">{salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn-common">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
