import CardImage from "../../../assets/images/card.png";
import Logo from "../../../assets/images/start-icon.png";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Course = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      {/* Heading and Subheading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Our Most Popular Courses
        </h2>
        <p className="text-lg text-gray-600">
          Courses to fuel your A-Level success.
        </p>
      </div>

      {/* Swiper Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          className="pb-12"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Course Card 1 */}
          <SwiperSlide>
            <div className="bg-[#F4F9FF] shadow-lg rounded-lg overflow-hidden">
              <img
                src={CardImage}
                alt="Course 1"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Course 1</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Course 1 and get started on your journey.
                </p>

                <div className="flex justify-between items-center ">
                  <div className="flex items-center space-x-4">
                    <div className="logo">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div className="text">
                      <p className="text-gray-600">90+ enrolled Students</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-black">$10</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Course Card 2 */}
          <SwiperSlide>
            <div className="bg-[#F4F9FF] shadow-lg rounded-lg overflow-hidden">
              <img
                src={CardImage}
                alt="Course 1"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Course 2</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Course 1 and get started on your journey.
                </p>

                <div className="flex justify-between items-center ">
                  <div className="flex items-center space-x-4">
                    <div className="logo">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div className="text">
                      <p className="text-gray-600">90+ enrolled Students</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-black">$10</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Course Card 3 */}
          <SwiperSlide>
            <div className="bg-[#F4F9FF] shadow-lg rounded-lg overflow-hidden">
              <img
                src={CardImage}
                alt="Course 1"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Course 3</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Course 1 and get started on your journey.
                </p>

                <div className="flex justify-between items-center ">
                  <div className="flex items-center space-x-4">
                    <div className="logo">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div className="text">
                      <p className="text-gray-600">90+ enrolled Students</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-black">$10</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Course Card 4 */}
          <SwiperSlide>
            <div className="bg-[#F4F9FF] shadow-lg rounded-lg overflow-hidden">
              <img
                src={CardImage}
                alt="Course 1"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Course 4</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Course 1 and get started on your journey.
                </p>

                <div className="flex justify-between items-center ">
                  <div className="flex items-center space-x-4">
                    <div className="logo">
                      <img src={Logo} alt="Logo" />
                    </div>
                    <div className="text">
                      <p className="text-gray-600">90+ enrolled Students</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-black">$10</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Course;
