import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import Swal from "sweetalert2";

const SingleServiceToDo = ({ bookToDo }) => {
  const {
    serviceName,
    serviceId,
    _id,
    serviceImage,
    providerEmail,
    providerName,
    currentUserEmail,
    currentUserName,
    startDate,
    serviceStatus: initialServiceStatus,
    specialInstruction,
    Price,
  } = bookToDo || {};


    const formattedDate = startDate
      ? new Date(startDate).toString() !== "Invalid Date"
        ? format(new Date(startDate), "PPP p") // Format date (e.g., Dec 24, 2024, 4:52 AM)
        : "Invalid date"
      : "Date not provided";

  const [serviceStatus, setServiceStatus] = useState(initialServiceStatus);

  const handleStatusChange = async (e, id) => {
    console.log(e.target.value, id);
    const newStatus = e.target.value;

    const statusData = {
      serviceStatus: newStatus,
    };

    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/bookToDoServices/${id}`,
        statusData
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        setServiceStatus(newStatus);
        Swal.fire({
          title: "Status is updated! successfully",
          icon: "success",
          draggable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="md:w-[70%] w-[90%] mx-auto my-10">
        <div className="">
          <div className="grid md:grid-cols-3 p-4 bg-base-100 shadow-xl">
            <figure className="flex justify-center border-r items-center">
              <img
                className="rounded-full w-[150px]  h-[150px] object-cover border-[#8e67f1] border-b-4"
                src={serviceImage}
                alt="Service"
              />
            </figure>
            <div className="border-r px-4 ">
              <p className="font-bold text-3xl">Booked Info</p>
              <div className="py-2">
                <h2 className="text-2xl">{serviceName}</h2>
                <h2 className="text-sm font-bold py-4">{specialInstruction}</h2>
              </div>
              <div className="flex gap-4  items-center">
                <div className="badge shadow-2xl bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">
                  {Price}$
                </div>
                {serviceStatus && (
                  <div className="badge shadow-2xl bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">
                    {serviceStatus}
                  </div>
                )}
              </div>

              {/* <p className="badge btn shadow-2xl" >{serviceStatus}</p>  */}
            </div>
            <div className="px-4">
              <h2 className="text-xl">Name : {currentUserName}</h2>
              <h2 className="font-bold py-4">Email: {currentUserEmail}</h2>
              <h2 className="font-bold">{formattedDate}</h2>
              <div className="py-3">
                <select
                  defaultValue={serviceStatus || "Booked Service Status"}
                  onChange={(e) => handleStatusChange(e, _id)}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled>Booked Service Status</option>
                  <option>pending</option>
                  <option>working</option>
                  <option>completed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceToDo;
