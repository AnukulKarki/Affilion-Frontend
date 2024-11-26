import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecentBlogPosts from "../components/Blogs/RecentBlogPosts";
import AllBlogPosts from "../components/Blogs/AllBlogPosts";

const Blogs = () => {
  document.title = "Blogs - Affilion";
  return (
    <>
      <Navbar />

      <section className="w-full lg:pt-24 pt-[6rem]">
        {/* Heading and Subheading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            The Affilion Journal: Stories and Tips
          </h2>
          <p className="text-lg text-gray-600">
            Empowering students with knowledge, insights, and success stories
            from the Affilion community.
          </p>
        </div>

        <RecentBlogPosts />
        <AllBlogPosts />
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
