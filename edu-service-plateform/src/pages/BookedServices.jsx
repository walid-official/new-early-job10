import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import axios from "axios";
import SingleBookService from "../components/SingleBookService/SingleBookService";
import useAxios from "../components/Hook/useAxios";


const BookedServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const axiosSecure = useAxios()
  const [bookedServices, setBookedServices] = useState([]);
  const [bookedServicesLoader, setBookedServicesLoader] = useState(false);

  useEffect(() => {
    document.title = "Edu-Service | Booked Service"
    setBookedServicesLoader(true)
    const fetchBookedServices = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/bookServices/${user?.email}`
        );
        setBookedServices(data);
        setBookedServicesLoader(false)
      } catch (error) {
        console.log(error);
        setBookedServicesLoader(false)
      }
    };
    fetchBookedServices();
  }, [user]);
  console.log(bookedServices);
  return (
    <div>

      {
        bookedServicesLoader ? <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div> :   bookedServices.length === 0 ? (
        <h2 className="font-bold text-4xl flex justify-center items-center h-screen text-center">No Service Is Booked Yet!!</h2>
      ) : (
        bookedServices.map((bookService, index) => (
          <SingleBookService
            key={index}
            bookService={bookService}
          ></SingleBookService>
        ))
      )
      }

    
    </div>
  );
};

export default BookedServices;
