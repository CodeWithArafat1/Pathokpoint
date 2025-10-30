import React, { useState, useRef } from "react";
import banner1 from "../assets/banner-1.webp";
const banner = [banner1, banner1, banner1, banner1];
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const allMegaMenuData = {
  "মেয়েদের ড্রেস": {
    columns: [
      {
        title: "ধরন অনুযায়ী",
        links: ["শাড়ি", "সালোয়ার কামিজ", "কুর্তি", "লেহেঙ্গা", "গাউন"],
      },
      {
        title: "উপলক্ষ",
        links: [
          "পার্টি ওয়্যার",
          "ক্যাজুয়াল ওয়্যার",
          "বিয়ের পোশাক",
          "অফিস ওয়্যার",
        ],
      },
    ],
  },
  আম: {
    columns: [
      {
        title: "জনপ্রিয় জাত",
        links: [
          "ল্যাংড়া",
          "আম্রপালি",
          "ফজলি",
          "হিমসাগর (খিরসাপাত)",
          "গোপালভোগ",
        ],
      },
      {
        title: "বিখ্যাত অঞ্চল",
        links: [
          "রাজশাহীর আম",
          "চাঁপাইনবাবগঞ্জের আম",
          "সাতক্ষীরার আম",
          "ফরমালিন মুক্ত আম",
        ],
      },
    ],
  },
  মধু: {
    columns: [
      {
        title: "ফুলের উৎস",
        links: [
          "সরিষা ফুলের মধু",
          "লিচু ফুলের মধু",
          "সুন্দরবনের মধু (খলিশা)",
          "কালোজিরা ফুলের মধু",
        ],
      },
      {
        title: "বিশেষ সংগ্রহ",
        links: ["খাঁটি প্রাকৃতিক মধু", "চাক ভাঙ্গা মধু", "খামারের মধু"],
      },
    ],
  },
  "খেজুরের গুড়": {
    columns: [
      {
        title: "প্রকারভেদ",
        links: ["পাটালি গুড়", "ঝোলা গুড় (নলেন গুড়)", "দানাদার গুড়"],
      },
      {
        title: "বিখ্যাত অঞ্চল",
        links: ["যশোরের খাঁটি গুড়", "নাটোরের গুড়", "ফরিদপুরের গুড়"],
      },
    ],
  },
};

const sidebarItems = ["মেয়েদের ড্রেস", "আম", "মধু", "খেজুরের গুড়"];

export default function SidebarLayout() {
  const [activeItem, setActiveItem] = useState(null);
  const currentMenuData = allMegaMenuData[activeItem];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperStyles = `
    .mySwiper .swiper-pagination-bullet-active {
      background: white;

    }
  `;

  return (
    <>
      <style>{swiperStyles}</style>

      <div className=" container mx-auto  mt-10 grid grid-cols-12">
        <aside
          className=" bg-white border-r border-gray-200 relative col-span-3 rounded-l-md"
          onMouseLeave={() => setActiveItem(null)}
        >
          <ul className="py-4">
            {sidebarItems.map((item, index) => (
              <li key={index} onMouseEnter={() => setActiveItem(item)}>
                <a
                  href="#"
                  className={`flex justify-between items-center w-full px-6 py-3 cursor-pointer ${
                    activeItem === item
                      ? "text-orange-600 bg-orange-50"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                  <IoIosArrowForward />
                </a>
              </li>
            ))}
          </ul>

          {currentMenuData && (
            <div className="absolute top-0 left-full h-full w-[301%] z-50 flex bg-white  border-l rounded-r-md border-gray-200 p-6">
              <div className="flex gap-6 w-full">
                {currentMenuData.columns.map((column, colIndex) => (
                  <div key={colIndex} className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">
                      {column.title}
                    </h4>
                    <ul className="space-y-2">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-orange-600"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        <main className="flex-1 col-span-9 relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
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
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Keyboard, Pagination, Navigation, Autoplay]}
            className="mySwiper h-full"
          >
            {banner.map((banner) => {
              return (
                <SwiperSlide>
                  <div className="h-full">
                    <img
                      src={banner}
                      alt="Banner Ad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-1 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:bg-opacity-100"
          >
            <IoIosArrowBack size={20} className="text-gray-700" />
          </div>
          <div
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-1 flex items-center justify-center w-10 h-10 bg-white bg-opacity-90 rounded-full shadow-md cursor-pointer transition-all duration-300 hover:bg-opacity-100"
          >
            <IoIosArrowForward size={20} className="text-gray-700" />
          </div>
        </main>
      </div>
    </>
  );
}
