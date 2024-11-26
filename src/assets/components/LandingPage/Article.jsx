import CardImage from "../../../assets/images/card.png";

const Article = () => {
  return (
    <section className="w-full py-16">
      {/* Heading and Subheading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Our Latest Articles
        </h2>
        <p className="text-gray-600">
          Discover inspiring stories, study tips, and insights.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white overflow-hidden">
          <img
            src={CardImage}
            alt="Course 1"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 flex flex-col justify-between flex-grow">
            <p className="text-sm text-gray-500">John Doe, 9th March</p>
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-md font-semibold text-gray-800">
                Choosing the Right Career Path
              </h3>
              <a href="/blogs/:id">
                <i className="fas fa-arrow-up-right-from-square text-gray-500 hover:text-primary"></i>
              </a>
            </div>
            <p className="text-gray-600 mt-2 line-clamp-3">
              Learn the basics of Course and get started on your journey.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                Tech
              </span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                IT
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <img
            src={CardImage}
            alt="Course 1"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 flex flex-col justify-between flex-grow">
            <p className="text-sm text-gray-500">John Doe, 9th March</p>
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-md font-semibold text-gray-800">
                Choosing the Right Career Path
              </h3>
              <a href="/blogs/:id">
                <i className="fas fa-arrow-up-right-from-square text-gray-500 hover:text-primary"></i>
              </a>
            </div>
            <p className="text-gray-600 mt-2 line-clamp-3">
              Learn the basics of Course and get started on your journey.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                Tech
              </span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                IT
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <img
            src={CardImage}
            alt="Course 1"
            className="w-full h-60 object-cover"
          />

          <div className="p-6 flex flex-col justify-between flex-grow">
            <p className="text-sm text-gray-500">John Doe, 9th March</p>
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-md font-semibold text-gray-800">
                Choosing the Right Career Path
              </h3>
              <a href="/blogs/:id">
                <i className="fas fa-arrow-up-right-from-square text-gray-500 hover:text-primary"></i>
              </a>
            </div>
            <p className="text-gray-600 mt-2 line-clamp-3">
              Learn the basics of Course and get started on your journey.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                Tech
              </span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full">
                IT
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right max-w-7xl px-8 mx-auto mt-2 ">
        <a href="/blogs">
          <button className=" text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            See more<i className="fas fa-arrow-right ml-2"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Article;
