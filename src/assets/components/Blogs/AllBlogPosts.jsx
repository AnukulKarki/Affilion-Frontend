const AllBlogPosts = () => {
  const posts = Array(6).fill({
    image: "https://via.placeholder.com/300x200",
    title: "Choosing the Right A-Level",
    description:
      "Navigating the world of digital art can be exciting, and with the right tools is essential...",
    author: "Anukul Karki",
    date: "10 Nov 2023",
    tags: ["A Levels", "Tips and Tricks"],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        All Blog Posts
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md  overflow-hidden flex flex-col"
            style={{ height: "500px" }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-1/2 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <p className="text-sm text-gray-500">
                {post.author}, {post.date}
              </p>
              <div className="flex items-center justify-between mt-2">
                <h3 className="text-md font-semibold text-gray-800">
                  {post.title}
                </h3>
                <a href="/blogs/:id">
                  <i className="fas fa-arrow-up-right-from-square text-gray-500 hover:text-primary"></i>
                </a>
              </div>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {post.description}
              </p>
              <div className="mt-4 flex items-center space-x-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs py-1 px-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Line Above Pagination */}
      <div className="border-t border-gray-300 mt-12 pt-6">
        {/* Pagination */}
        <div className="flex justify-between items-center">
          <button
            className="flex items-center text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
            disabled
          >
            <i className="fas fa-arrow-left mr-2"></i> Previous
          </button>

          <div className="flex items-center space-x-2">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                    index === 0
                      ? "bg-footer-primary text-white border-footer-primary"
                      : "bg-white text-gray-800 border-gray-300 hover:border-footer-primary"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
          </div>

          <button className="flex items-center text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
            Next <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogPosts;
