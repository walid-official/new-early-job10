import React from "react";
import "./service.css";
import { NavLink } from "react-router-dom";
const SinglePopularService = ({ popularService }) => {
  console.log(popularService);
  const {
    _id,
    serviceName,
    description,
    servicePhoto,
    serviceProviderData,
    price,
  } = popularService;
  return (
    <div className="card rounded-md shadow-md hover:shadow-2xl duration-300" data-aos="fade-up" data-aos-mirror="false"  data-aos-once="false">
      <figure className="p-5 border-b">
        <img
          className="rounded-full w-[200px] h-[200px] object-cover border-[#8e67f1] border-b-4"
          src={servicePhoto}
          alt="Service"
        />
      </figure>
      <div className="card-body border-b">
        <h2 className="card-title ">{serviceName}</h2>
        <div className="">
          <p className="">{description.slice(0, 50)}...</p>
        </div>
        <div className="flex justify-start py-2">
          <NavLink to={`/DetailService/${_id}`}>
            <button className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
      {/* <div className=" py-4 px-3">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <img
              className="w-12 h-12 object-cover border-[#8e67f1] border rounded-full"
              src={serviceProviderData?.photoURL}
              alt="Service Provider"
            />
            <p className="pl-2">{serviceProviderData?.name}</p>
          </div>
          <div>
            <p className="text-[#8e67f1] font-bold">${price}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePopularService;
