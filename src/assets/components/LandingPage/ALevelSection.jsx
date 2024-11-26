import Student from "../../images/hero-landing.png";

const ALevelSection = () => {
  return (
    <section className="w-full py-8 bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-black mb-4">
            Shaping A-Level Success Through Innovation.
          </h2>
          <p className="text-gray-600 mb-6">
            At Affilion, we shape the future of our students through innovative
            teaching, expert-designed programs, and a commitment to excellence,
            empowering them to succeed in their A-Level journey.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Student}
            alt="A-Level Success"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ALevelSection;
