import CardImage from "../../../assets/images/card.png";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section className="w-full py-16">
      {/* Heading and Subheading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Students Says
        </h2>
        <p className="text-gray-600">
          Hear from our students about their with Affilion.
        </p>
      </div>

      {/* Cards Section */}
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
          <SwiperSlide>
            <div className="bg-primary-tint rounded-lg overflow-hidden p-6 text-center">
              <img
                src={CardImage}
                alt="Testimonial"
                className="w-24 h-24 rounded-full mx-auto my-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">John Doe</h3>
              <p className="text-gray-600 text-sm">Student 1</p>

              <p className="text-gray-600 my-8">
                “ Affilion has completely transformed my A-Level experience. The
                courses are engaging, and the support from teachers is
                unmatched. I feel more prepared and confident every day! “
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-primary-tint rounded-lg overflow-hidden p-6 text-center">
              <img
                src={CardImage}
                alt="Testimonial"
                className="w-24 h-24 rounded-full mx-auto my-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">John Doe</h3>
              <p className="text-gray-600 text-sm">Student 2</p>

              <p className="text-gray-600 my-8">
                “ Affilion has completely transformed my A-Level experience. The
                courses are engaging, and the support from teachers is
                unmatched. I feel more prepared and confident every day! “
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-primary-tint rounded-lg overflow-hidden p-6 text-center">
              <img
                src={CardImage}
                alt="Testimonial"
                className="w-24 h-24 rounded-full mx-auto my-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">John Doe</h3>
              <p className="text-gray-600 text-sm">Student 3</p>

              <p className="text-gray-600 my-8">
                “ Affilion has completely transformed my A-Level experience. The
                courses are engaging, and the support from teachers is
                unmatched. I feel more prepared and confident every day! “
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-primary-tint rounded-lg overflow-hidden p-6 text-center">
              <img
                src={CardImage}
                alt="Testimonial"
                className="w-24 h-24 rounded-full mx-auto my-4 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1">John Doe</h3>
              <p className="text-gray-600 text-sm">Student 4</p>

              <p className="text-gray-600 my-8">
                “ Affilion has completely transformed my A-Level experience. The
                courses are engaging, and the support from teachers is
                unmatched. I feel more prepared and confident every day! “
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
