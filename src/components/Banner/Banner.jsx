import user from "../../assets/images/user.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero bg-[linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)]">
      <div className="container">
        <div className="flex lg:flex-row-reverse items-center">
          <img src={user} />
          <div>
            <h1 className="text-7xl font-bold banner-title">
              One Step <br />
              Closer To Your <br />
              <span className="dream-text">Dream Job</span>
            </h1>
            <p className="py-6 banner-detail">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-common">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
