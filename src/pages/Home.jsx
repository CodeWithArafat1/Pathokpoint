import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import { Link } from "react-router";

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const sliderStyles = `
    .cardSlider .swiper-button-next,
    .cardSlider .swiper-button-prev {
      @apply hidden;
    }

    .cardSlider .swiper-pagination-bullet {
      @apply w-2 h-2 bg-orange-500 opacity-50;
    }
    .cardSlider .swiper-pagination-bullet-active {
      @apply w-2.5 h-2.5 bg-orange-600 opacity-100;
    }
    .cardSlider .swiper-pagination {
      @apply relative mt-8; 
    }
  `;

  return (
    <>
      <Banner />
      <style>{sliderStyles}</style>
      <div className="container mx-auto mt-10 relative bg-white px-4 md:px-10 rounded-md">
        <div className="py-5 flex justify-between">
          <h1 className="font-bold text-xl">Featured Products</h1>

          <Link to="/all_products" className="relative group pb-1 font-bold text-orange-500">
            See More
            <span
              className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-orange-500
                     group-hover:w-full transition-all duration-300 ease-in-out"
            ></span>
          </Link>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }, 0);
          }}
          modules={[Navigation]}
          className="mySwiper cardSlider"
        >
          <SwiperSlide className="pb-4">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide className="pb-4">
            <ProductCard />
          </SwiperSlide>
        </Swiper>

        <div
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-4 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:bg-opacity-100"
        >
          <IoIosArrowBack size={20} className="text-gray-700" />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-4 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:bg-opacity-100"
        >
          <IoIosArrowForward size={20} className="text-gray-700" />
        </div>
      </div>
    </>
  );
};
export default Home;
