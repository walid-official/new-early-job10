import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import SingleServiceToDo from '../components/SingleServiceToDo/SingleServiceToDo';
import useAxios from '../components/Hook/useAxios';

const ServiceToDo = () => {
    const {user} = useContext(AuthContext)
    const [bookedToDoServices, setBookedServices] = useState([]);
    const axiosSecure = useAxios()
  useEffect(() => {
    document.title = "Edu-Service | Service-To-Do"
    const fetchBookedServices = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/bookToDoServices/${user?.email}`
        );
        setBookedServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookedServices();
  }, []);

  console.log(bookedToDoServices);

    return (
        <div>
            {bookedToDoServices.length === 0 ? <h2 className='font-bold flex justify-center items-center h-screen  text-center text-3xl'>Nobody is Booked Your Service!!</h2> : bookedToDoServices.map((bookToDo,index) => <SingleServiceToDo key={index} bookToDo={bookToDo} ></SingleServiceToDo> )  }
        </div>
    );
};

export default ServiceToDo;