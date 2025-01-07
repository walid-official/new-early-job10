import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";
import { Pagination, Autoplay } from "swiper/modules";
const Hero = () => {
  return (
    // v className="bg-center bg-cover" style={{backgroundImage: `url(https://img.freepik.com/premium-vector/green-liquid-background-template-with-copy-space-vector-stock_189483-1876.jpg)`}}
    <div className="py-10">
      <div className="w-[85%] mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000, // Time in milliseconds (3 seconds)
            disableOnInteraction: false, // Slider continues even after user interaction
          }}
          modules={[Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="md:flex">
                <div className="flex flex-col justify-center">
                  <h2 className="font-bold text-5xl">Homework Help Hub</h2>
                  <h2 className="font-bold text-2xl py-2">
                    Study Success Zone
                  </h2>
                  <p className="md:w-[80%] text-sm py-3">
                    It's a dedicated platform designed to assist students in
                    tackling their daily homework challenges. Whether it's
                    solving complex math problems, writing essays, or
                    understanding scientific concepts.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <img
                    className="w-full"
                    src="https://pixcap.com/cdn/library/template/1723654624011/thumbnail/Two_Employees_Are_Working_Together_In_Front_Of_The_Desk_3D_Illustration_transparent_800_emp.webp"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="md:flex">
              <div className="w-full">
                <img
                  className="w-full"
                  src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298b303b93d91_3d-tb-education.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="">
                  <h2 className="font-bold  text-5xl">Knowledge Boost Hub</h2>
                  <h2 className="font-bold  text-2xl py-2">LearnPro Academy</h2>
                  <p className="md:w-[80%]  text-sm py-3">
                    Empowering students to enhance their understanding of
                    challenging concepts, tackle assignments with confidence,
                    and excel academically through expert guidance and
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="md:flex">
              <div className="flex flex-col justify-center">
                <h2 className="font-bold text-5xl">Exam Edge Program</h2>
                <h2 className="font-bold text-2xl py-2">
                  Test Triumph Program
                </h2>
                <p className="md:w-[80%] text-sm py-3">
                  A comprehensive and tailored program designed to equip
                  students with the essential tools, proven techniques, and
                  unwavering confidence needed to excel in exams. By focusing on
                  effective study methods, time management skills.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <img
                  className="w-full"
                  src="https://pixcap.com/cdn/library/template/1723748503236/thumbnail/Passion_In_Learning_3D_Illustration_transparent_emp_800.webp"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
