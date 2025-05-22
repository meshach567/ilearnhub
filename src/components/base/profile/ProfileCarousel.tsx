// components/ProfileCarousel.tsx
"use client"; // Mark this component as a Client Component

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProfileCard from "../../ui/ProfileCard";
import Dannette from "@/assets/images/dannette.png";
import Clara from "@/assets/images/clara.png";

const ProfileCarousel = () => {
  const profiles = [
    {
      image: Dannette, // Replace with your image path
      name: "John Doe",
      role: "Software Engineer",
      description:
        "Passionate about building scalable and efficient systems. Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure  itself, pleasure itself",
    },
    {
      image: Clara, // Replace with your image path
      name: "Jane Smith",
      role: "UI/UX Designer",
      description:
        "Loves creating intuitive and beautiful user interfaces. Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots ",
    },
    {
      image: Dannette, // Replace with your image path
      name: "Alice Johnson",
      role: "Data Scientist",
      description:
        "Expert in machine learning and data analysis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou ",
    },
    {
      image: Clara, // Replace with your image path
      name: "Bob Brown",
      role: "DevOps Engineer",
      description:
        "Specializes in CI/CD and cloud infrastructure. Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots ",
    },
    {
      image: Dannette, // Replace with your image path
      name: "Charlie Davis",
      role: "Frontend Developer",
      description:
        "Enjoys building responsive and interactive web apps. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou ",
    },
  ];

  return (
    <div className="flex flex-col space-y-8 p-10 bg-gray-50">
      <div className=" space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          What Our Student Say
        </h2>
        <p className="text-gray-700 text-center mt-4">
          Meet our team of talented professionals who have a passion for
          creating meaningful and impactful experiences.
        </p>
      </div>
      <div className="relative mx-auto w-[70%]">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
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
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <ProfileCard {...profile} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-pagination absolute -bottom-5 mt-8 flex justify-center space-x-2"></div>
      </div>
    </div>
  );
};

export default ProfileCarousel;
