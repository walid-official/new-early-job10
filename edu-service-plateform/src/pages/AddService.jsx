import React, { useContext, useEffect } from "react";
import AddServiceImg from "../assets/images/addService.png"
import { motion } from "motion/react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import axios from "axios";
import useAxios from "../components/Hook/useAxios";
import Swal from "sweetalert2";
const AddService = () => {
const { user } = useContext(AuthContext);
const axiosSecure = useAxios()


  useEffect(()=>{
    document.title = "Edu-Service | Add Service"
  },[])



  const handleAddService = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const serviceProviderData = {
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL
    }
     const addServiceData = {
      ...initialData,
      serviceProviderData
     }

     console.log(addServiceData);
     try{
        const {data} = await axiosSecure.post(`/addService`, addServiceData)
        console.log(data);
        Swal.fire({
          title: "Successfully Added Your Service!",
          icon: "success",
          draggable: true
        });
     }catch(error){
       console.log(error);
     }
  }

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[50%]">
            <motion.div
              animate={{ y: 20, x: 20 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            className="">
              <img src="https://img.freepik.com/premium-vector/learning-support-icon-3d-illustration-from-elearning-collection-creative-learning-support-3d-icon-web-design-templates-infographics-more_676904-747.jpg?ga=GA1.1.1662778785.1716400131&semt=ais_hybrid" />
            </motion.div>
          </div>
          <div  className="card bg-base-100  max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleAddService} className="card-body">
              <div className="md:flex gap-3 justify-between">
                <div className="form-control">  
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label> 
                  <input
                    type="text"
                    placeholder="Service Name"
                    className="input input-bordered w-full"
                    name="serviceName"
                    required
                  />
                </div>
                <div className="form-control"> 
                  <label className="label"> 
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PhotoURl"
                    className="input input-bordered w-full"
                    name="servicePhoto"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Area"
                  name="serviceArea"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  placeholder="Description"
                  name="description"
                  className="textarea textarea-bordered pb-10 w-full"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
