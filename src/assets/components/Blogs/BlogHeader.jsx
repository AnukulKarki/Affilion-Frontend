import BackgroundImage from "../../images/landing-bg.png";

const BlogHeader = () => {
  return (
    <section
      className="max-w-7xl mt-24 m-auto bg-cover text-white flex items-center h-96"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          {/* Header */}
          <h1 className="text-4xl font-bold mb-4">
            Understanding A-Level Success
          </h1>

          {/* Small Description */}
          <p className="text-lg text-gray-200 mb-6">
            An in-depth guide to shaping your academic journey with innovation
            and expert guidance.
          </p>

          {/* Author Name and Date */}
          <div className="mb-4">
            <p className="text-sm text-gray-300">
              By <span className="font-semibold">John Doe</span> | November 21,
              2024
            </p>
          </div>

          {/* Tags */}
          <div className="flex space-x-3 ">
            <span className="px-3 py-1 bg-primary-tint text-gray-600 font-semibold rounded-full text-sm">
              Education
            </span>
            <span className="px-3 py-1 bg-primary-tint text-gray-600 font-semibold rounded-full text-sm">
              Innovation
            </span>
            <span className="px-3 py-1 bg-primary-tint text-gray-600 font-semibold rounded-full text-sm">
              A-Level
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
