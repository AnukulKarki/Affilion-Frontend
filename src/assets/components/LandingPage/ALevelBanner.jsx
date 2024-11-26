import { Link } from "react-router-dom";
import BackgroundImage from "../../images/landing-bg.png";

const ALevelBanner = () => {
  return (
    <div className="relative w-full text-center py-16 mt-12">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Shape Your A-Level Future?
        </h2>
        <p className="text-sm text-white mb-6">
          Join Affilion and start your journey to success today!
        </p>
        <Link to="/signup">
          <button className="bg-white text-primary  px-6 py-2 rounded-lg hover:bg-gray-200">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ALevelBanner;
