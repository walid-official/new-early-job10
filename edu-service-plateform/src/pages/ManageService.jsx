import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import axios from "axios";
import SingleManageService from "../components/SingleManageService/SingleManageService";
import Swal from "sweetalert2";
import useAxios from "../components/Hook/useAxios";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const axiosSecure = useAxios();
  const [manageServices, setManageServices] = useState([]);
  const [manageServicesLoader, setManageServicesLoader] = useState(false);
  
  useEffect(() => {
    document.title = "Edu-Service | Manage Service"
    setManageServicesLoader(true);
    const fetchServices = async () => {
      try {
        const { data } = await axiosSecure.get(`/services/${user?.email}`);
        setManageServices(data);
        setManageServicesLoader(false);
      } catch (error) {
        console.log(error);
        setManageServicesLoader(false);
      }
    };
    fetchServices();
  }, [user]);

  const handleDeleteService = async (id) => {
    try {
      // Show the confirmation modal using Swal
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6", // Color for the "Yes, delete it!" button
        cancelButtonColor: "#d33", // Color for the "Cancel" button
        confirmButtonText: "Yes, delete it!", // Text for the confirm button
      }).then(async (result) => {
        if (result.isConfirmed) {
          // If user confirms, proceed with deletion
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/deleteService/${id}`
          );

          // Remove the deleted service from the state
          const remainingServices = manageServices.filter(
            (service) => service._id !== id
          );
          setManageServices(remainingServices);

          // Show success message
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          console.log(data);
        }
      });
    } catch (error) {
      console.log("Error deleting the service:", error);
    }
  };

  console.log(manageServices);
  return (
    <div>
      {manageServicesLoader ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : manageServices.length === 0 ? <h2 className="font-bold text-4xl flex justify-center items-center h-screen text-center">No Service Is Added</h2> : (
        manageServices.map((manageService, index) => (
          <SingleManageService
            key={index}
            handleDeleteService={handleDeleteService}
            manageService={manageService}
          ></SingleManageService>
        ))
      ) }
    </div>
  );
};

export default ManageService;
