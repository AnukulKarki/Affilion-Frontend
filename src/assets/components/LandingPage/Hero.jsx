import HeroBg from "../../../assets/images/hero-bg.png";
import StartIcon from "../../../assets/images/start-icon.png";
import Subject from "../../../assets/images/subjects-icon.png";
import Student from "../../../assets/images/students-icon.png";
import Teacher from "../../../assets/images/teachers-icon.png";
import Experience from "../../../assets/images/experience-icon.png";
import Placeholder from "../../../assets/images/placeholder.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full lg:pt-16 pt-[6rem]">
      {/* hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-full space-y-8 lg:space-y-0 lg:space-x-12">
        {/* left */}
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Your Future Begins Here <br /> with{" "}
            <span className="text-hero-primary">Affilion</span>
          </h1>
          <p className="text-gray-text lg:mb-12 mb-4">
            With exceptional teaching, personalized support, and a vibrant
            community, we help you carve your path to success.
          </p>
          <div className="flex flex-row space-x-8">
            <Link to="/signup">
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark">
                Get Started
              </button>
            </Link>

            <Link to="/login" className="flex items-center">
              <button className="flex items-center text-primary hover:underline">
                <img src={StartIcon} alt="Start Icon" className="pr-2" />
                <span>Start a free trial</span>
              </button>
            </Link>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-[75%] h-auto">
          <img src={HeroBg} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* info section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-primary-tint p-6 rounded-sm">
          <div className="flex items-center space-x-4">
            <div>
              <img src={Subject} alt="Subject Icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">10+</h1>
              <p className="text-gray-600">Subjects</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <img src={Student} alt="Student Icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">100+</h1>
              <p className="text-gray-600">Students</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <img src={Teacher} alt="Teacher Icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">20+</h1>
              <p className="text-gray-600">Teachers</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <img src={Experience} alt="Experience Icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">2 Years+</h1>
              <p className="text-gray-600">of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* placeholder section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="w-full h-full">
          <img src={Placeholder} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
