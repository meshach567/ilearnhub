// components/Carousel.tsx
"use client"; // Mark this component as a Client Component

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct import for Pagination
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS
import Image from "next/image";
import frontend from "../../icons/frontend.svg";
import mobile from "../../icons/mobile.svg";
import backend from "../../icons/backend.svg";

const Carousel = () => {
  const cards = [
    {
      image: frontend,
      title: "Web Development",
      rating: 4,
      price: "$99.99",
      description: "Learn to build modern web applications.",
    },
    {
      image: backend,
      title: "Data Science",
      rating: 5,
      price: "$129.99",
      description: "Master data analysis and machine learning.",
    },
    {
      image: mobile,
      title: "Mobile Development",
      rating: 4,
      price: "$89.99",
      description: "Build cross-platform mobile apps.",
    },
    {
      image: frontend,
      title: "UI/UX Design",
      rating: 5,
      price: "$79.99",
      description: "Design stunning user interfaces.",
    },
    {
      image: backend,
      title: "Cloud Computing",
      rating: 4,
      price: "$109.99",
      description: "Learn cloud infrastructure and services.",
    },
    {
      image: mobile,
      title: "Cybersecurity",
      rating: 5,
      price: "$149.99",
      description: "Secure systems and networks from threats.",
    },
  ];

  return (
    <div className="space-y-8 flex flex-col">
      <div className="leading-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Our Popular Courses
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Explore our wide range of courses and learn from top professionals.
        </p>
      </div>
      <div className="relative w-[86%] mx-auto">
        <Swiper
          modules={[Pagination]} // Add Pagination module here
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Custom pagination container
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm mb-2">
                    {card.description}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </p>
                    <span className="flex items-center text-yellow-500">
                      {"★".repeat(card.rating)}
                      {"☆".repeat(Math.max(0, 4 - card.rating))}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-[#FF7F50] mb-2">
                    {card.price}
                  </p>
                  <hr className="border-t border-gray-200 mb-4" />
                  <button
                    type="button"
                    className="w-full bg-[#FF7F50] text-white py-2 rounded-lg hover:bg-[#fe7e4f] transition duration-300"
                  >
                    Register
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination Dots */}
        <div className="custom-pagination absolute -top-3 md:right-0 md:-top-4 gap-2 z-50 cursor-pointer transform -translate-y-1/2 flex flex-row"></div>
      </div>
    </div>
  );
};

export default Carousel;
