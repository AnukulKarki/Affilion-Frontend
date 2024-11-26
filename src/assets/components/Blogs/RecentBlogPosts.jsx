const RecentBlogPosts = () => {
  const posts = [
    {
      image: "https://via.placeholder.com/600x400",
      title: "Tips to Ace Your A-Level Exams",
      description:
        "Preparing for A-Level exams can be challenging, but with the right approach, success is within reach.",
      author: "Anukul Karki",
      date: "10 Nov 2023",
      tags: ["Exam", "Tips and Tricks", "A Levels"],
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Student Success Stories",
      description:
        "Our students' achievements are at the heart of what we do. We celebrate their success stories.",
      author: "Loki Odinson",
      date: "20 Feb 2024",
      tags: ["Students", "Stories"],
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Enhance Your Digital Art Skills",
      description:
        "Navigating the world of digital art can be exciting, and with the right tools, it gets easier.",
      author: "Riya J.J.",
      date: "15 March 2024",
      tags: ["Designing", "Tips and Tricks"],
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Choosing the Right A-Level",
      description:
        "Choosing the right subjects for A-Level can make a significant impact on your career goals.",
      author: "Anukul Karki",
      date: "10 Nov 2023",
      tags: ["A Levels", "Tips and Tricks"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Recent Blog Posts
      </h2>

      {/* Layout: Big post on the left, 3 small posts on the right */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* Left (Big Post) */}
        <div className="flex-1 lg:w-1/2 bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
          <img
            src={posts[0].image}
            alt={posts[0].title}
            className="w-full h-96 object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <p className="text-sm text-gray-500">
              {posts[0].author}, {posts[0].date}
            </p>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800">
                {posts[0].title}
              </h3>
              <a href="/blogs/:id">
                <i className="fas fa-arrow-up-right-from-square text-gray-500 hover:text-primary"></i>
              </a>
            </div>
            <p className="text-gray-600 mt-2">{posts[0].description}</p>
            <div className="mt-4 flex items-center space-x-2">
              {posts[0].tags.map((tag, index) => (
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

        {/* Right (Small Posts) */}
        <div className="flex flex-col lg:w-1/2 gap-4">
          {posts.slice(1).map((post, index) => (
            <div
              key={index}
              className="flex bg-white shadow-md rounded-lg overflow-hidden flex-grow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-1/3 h-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <p className="text-sm text-gray-500">
                  {post.author}, {post.date}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <a href="/blogs/:id">
                    <i className="fas fa-arrow-up-right-from-square text-gray-500 hover:text-primary"></i>
                  </a>
                </div>
                <p className="text-gray-600 mt-2">{post.description}</p>
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
      </div>
    </div>
  );
};

export default RecentBlogPosts;
