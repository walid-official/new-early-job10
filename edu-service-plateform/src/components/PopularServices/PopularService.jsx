import axios from "axios";
import React, { useEffect, useState } from "react";
import SinglePopularService from "./SinglePopularService";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const PopularService = () => {
  const [popularServices, setPopularServices] = useState([]);
  const [PopularServicesLoader, setPopularServicesLoader] = useState(false);
  useEffect(() => {
    setPopularServicesLoader(true);
    const fetchPopularServices = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/services`
        );
        setPopularServices(data);
        setPopularServicesLoader(false);
      } catch (error) {
        console.log(error);
        setPopularServicesLoader(false);
      }
    };
    fetchPopularServices();
  }, []);
  console.log(popularServices);
  return (
    <div className=" w-[95%] md:w-11/12 mx-auto">
      <div className="pt-2 pb-6">
        <div className="flex py-4 gap-2 justify-center items-center">
          <div className="bg-[#8e67f1] w-16 h-1"></div>
          <h3 className="text-center font-bold text-2xl md:text-4xl">
            Popular Services
          </h3>
          <div className="bg-[#8e67f1] w-16 h-1"></div>
        </div>
        <p className="md:w-[40%] mx-auto text-center font-bold">
          Our top-rated educational services include tutoring, exam preparation,
          and creative workshops, tailored to empower learners of all ages and
          levels.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 md:gap-10 my-20">
        {PopularServicesLoader ? (
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          popularServices?.map((popularService, index) => (
            <SinglePopularService
              key={index}
              popularService={popularService}
            ></SinglePopularService>
          ))
        )}
      </div>
      <div className="flex justify-center items-center ">
        <NavLink className="" to="/allServices">
          <button className="btn hover:translate-x-4 duration-700 flex gap-2 bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">All Services <button><FaLongArrowAltRight></FaLongArrowAltRight></button></button>
          
        </NavLink>
        
      </div>
    </div>
  );
};

export default PopularService;
