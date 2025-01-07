import React from "react";
import { Link } from "react-router-dom";

const AllService = ({ singleService }) => {
  const {
    _id,
    serviceName,
    description,
    servicePhoto,
    serviceArea,
    serviceProviderData,
    price,
  } = singleService || {};

  return (
    <div>
      <div className="md:w-[70%] w-[90%] mx-auto my-10">
        <div className="">
          <div className="grid md:grid-cols-2 p-4 bg-base-100 shadow-xl">
            <figure className="flex justify-center items-center">
              <img
                className="rounded-full w-[250px]  h-[250px] object-cover border-[#8e67f1] border-b-4"
                src={servicePhoto}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-extrabold">{serviceName}</h2>
              <h2 className="font-bold">{serviceArea}</h2>
              <p>{description.slice(0, 120)}...</p>
              <div className="flex py-3 gap-2">
                <img
                  className="w-12 h-12 rounded-full"
                  src={serviceProviderData?.photoURL}
                  alt=""
                />
                <h2 className="font-bold py-3">{serviceProviderData?.name}</h2>
              </div>
              <div className="card-actions justify-start">
                <button
                  onClick={() => handleDeleteService(_id)}
                  className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
                >
                  {price}$
                </button>
                <Link to={`/DetailService/${_id}`}>
                  <button className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllService;
