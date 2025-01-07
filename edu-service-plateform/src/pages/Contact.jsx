import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { LiaAddressCardSolid } from "react-icons/lia";
import mail from "../assets/images/mail2.gif"
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_zkobzwh",
          "template_kvl3fu6",
          form.current,
          "n9eOVgGeK1V5CpTT0"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            toast.success("Email sent successfully!");
            form.current.reset(); 
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Failed to send the email. Please try again later.");
          }
        );
    };


  return (
    <div>
      <div className="bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-white py-12">
        <h2 className="font-bold text-center text-4xl">Contact Us</h2>

        <div className="flex justify-center py-3 gap-2 ">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <p className="">-</p>

          <Link to="/contact" className="font-bold">
            Contact
          </Link>
        </div>
      </div>
      <div className="w-11/12 mx-auto  pt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
          <div className="card border rounded-none bg-base-100  shadow-xl hover:shadow-lg duration-300">
            <div className=" py-6 flex gap-5">
              <div className="">
                <h2 className="text-white p-5 bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-3xl">
                  <FaPhoneVolume></FaPhoneVolume>
                </h2>
              </div>
              <div className="">
                <p className="font-bold text-xl">phone Number</p>
                <div className="py-3">
                  <p>+8 (800) 123 45 69</p>
                  <p>+8 (800) 123 45 69</p>
                  <p>+8 (800) 123 45 69</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border rounded-none bg-base-100  shadow-xl hover:shadow-lg duration-300">
            <div className=" py-6 flex gap-5">
              <div className="">
                <h2 className="text-white p-5 bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-3xl">
                  <SiMinutemailer></SiMinutemailer>
                </h2>
              </div>
              <div className="">
                <p className="font-bold text-xl">Email & Chat</p>
                <div className="py-3">
                  <p>hello@eduma.com</p>
                  <p>support@eduma.com</p>
                  <p>eduma@company.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border pr-3 rounded-none bg-base-100  shadow-xl hover:shadow-lg duration-300">
            <div className=" py-6 flex gap-5">
              <div className="">
                <h2 className="text-white p-4 bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] text-4xl">
                  <LiaAddressCardSolid ></LiaAddressCardSolid>
                </h2>
              </div>
              <div className="">
                <p className="font-bold text-xl">Address & Hours</p>
                <div className="py-3">
                  <p>st. 567, Los Angeles, California, US.</p>
                  <p>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto py-14">
        <div className="lg:flex ">
            <div className="lg:w-[60%]">
                <img src={mail} alt="" />
            </div>
            <div className="lg:w-[40%]">
            <div className="card w-full shadow-2xl">
            <form ref={form} onSubmit={sendEmail}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="from_name"
                  className="border  p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="from_name"
                  placeholder="Email"
                  className="border  p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="border  p-6 pb-14 rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="md:w-[40%] bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] font-bold text-white px-10 py-4 rounded-full shadow-lg border">
                  Send Message
                </button>
              </div>
            </form>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
