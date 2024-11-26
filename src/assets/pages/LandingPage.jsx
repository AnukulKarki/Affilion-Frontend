import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/LandingPage/Course";
import Hero from "../components/LandingPage/Hero";
import ALevelSection from "../components/LandingPage/ALevelSection";
import Testimonials from "../components/LandingPage/Testimonials";
import Video from "../components/LandingPage/Video";
import Article from "../components/LandingPage/Article";
import ALevelBanner from "../components/LandingPage/ALevelBanner";

const LandingPage = () => {
  document.title = "Affilion";
  return (
    <>
      <Navbar />
      <Hero />
      <Course />
      <ALevelSection />
      <ALevelBanner />
      <Testimonials />
      <Video />
      <Article />
      <Footer />
    </>
  );
};

export default LandingPage;
