import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HomePage = () => {
  return (
    <div className="pt-0"> {/* Pushes content below fixed navbar */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[vh]"
      >
        <SwiperSlide>
          <img
            src="/images/banner1.png"
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/banner2.png"
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/banner3.png"
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Optional Welcome Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to MindHealer</h2>
        <p className="text-gray-600">Your one-stop mental wellness and spiritual support platform.</p>
      </div>
    </div>
  );
};

export default HomePage;