import Navbar from "../components/Navbar";
import BlogHeader from "../components/Blogs/BlogHeader";
import BlogText from "../components/Blogs/BlogText";
import RecommendedBlogs from "../components/Blogs/RecommendedBlogs";
import ALevelBanner from "../components/LandingPage/ALevelBanner";
import Footer from "../components/Footer";

const Blogs = () => {
  document.title = "${Title}";
  return (
    <>
      <Navbar />
      <BlogHeader />
      <BlogText />
      <RecommendedBlogs />
      <ALevelBanner />
      <Footer />
    </>
  );
};

export default Blogs;
