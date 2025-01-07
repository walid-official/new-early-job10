import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const BookModal = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const {
    _id: id,
    serviceName,
    description,
    servicePhoto,
    serviceArea,
    serviceProviderData,
    price,
  } = service || {};

  const handleBookService = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookData = Object.fromEntries(formData.entries());

    const bookPurchase = {
      ...bookData,
      serviceStatus: "pending",
      startDate,
    };

    if (user?.email === serviceProviderData?.email) {
      return toast.error("Action Is Invalid");
    }

    console.log(bookPurchase);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/bookServices`,
        bookPurchase
      );
      Swal.fire({
        title: "Successfully Booked Service!",
        icon: "success",
        draggable: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("You Already Have Purchased This Service!");
    }
  };

  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div
          className="modal-box w-11/12 max-w-3xl bg-center bg-cover"
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-paper-cut-shape-wave-background_474888-4825.jpg)`,
          }}
        >
          <div className="">
            <h2 className="font-bold text-center text-3xl py-6">
              Your Personal Book Companion
            </h2>
          </div>
          <form onSubmit={handleBookService} className="card-body">
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#060303]">
                    ServiceId
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="ServiceId"
                  value={id}
                  className="input input-bordered w-full"
                  name="serviceId"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Service Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  value={serviceName}
                  className="input input-bordered w-full"
                  name="serviceName"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Service Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="serviceImage"
                  value={servicePhoto}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Provider Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider Email"
                  name="providerEmail"
                  value={serviceProviderData?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Provider Name</span>
                </label>
                <input
                  placeholder="Provider Name"
                  name="providerName"
                  value={serviceProviderData?.name}
                  className="input input-bordered w-full"
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Current User Email
                  </span>
                </label>
                <input
                  placeholder="Current User Email"
                  name="currentUserEmail"
                  value={user?.email}
                  className="input input-bordered w-full"
                ></input>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Current User Name
                  </span>
                </label>
                <input
                  placeholder="Current User Name"
                  name="currentUserName"
                  value={user?.displayName}
                  className="input input-bordered w-full"
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  placeholder="Price"
                  name="Price"
                  value={price}
                  className="input input-bordered w-full"
                ></input>
              </div>
            </div>

            <div className="form-control w-full flex flex-col gap-2 ">
              <label className="label-text font-bold">
                Service Taking Date
              </label>

              <DatePicker
                className="border p-2 w-full rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Special instruction
                </span>
              </label>

              <textarea
                placeholder="Special instruction"
                name="specialInstruction"
                className="textarea textarea-bordered pb-10 w-full"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => document.getElementById("my_modal_4").close()}
                className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white"
              >
                Purchase Service
              </button>
            </div>
           <div className="">
           <div className="modal-action ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn absolute top-6 left-6 text-2xl font-bold"><IoClose></IoClose></button>
              </form>
            </div>
           </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookModal;
