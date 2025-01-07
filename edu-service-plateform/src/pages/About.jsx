import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#774ede] to-[#8e67f1cb]  text-white py-10">
        <h2 className="font-bold text-center text-4xl">About Us</h2>

        <div className="flex justify-center py-3 gap-2 ">
          <Link to="/" className="font-bold">Home</Link>
          <p className="">-</p>

          <Link to="/about" className="font-bold">About</Link>
        </div>
      </div>

      <div className="pt-10 w-11/12 mx-auto">
        <div className="">
          <h2 className="font-bold md:w-[35%] mx-auto text-center text-xl">
            Empower Minds, Inspire Futures: Your Journey to Lifelong Learning
          </h2>
          {/* <p className="md:w-[45%] mx-auto font-semibold text-center py-4">
            Empowering learners to discover their potential, thrive with
            knowledge, and live a purpose-driven life, fostering lifelong
            success and meaningful impact.
          </p> */}
        </div>
        <div className="lg:w-[65%] mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-3 py-20">
            {/* Counter 1 */}
            <div className="text-center lg:mt-10 shadow-lg hover:shadow-2xl w-[200px] mx-auto h-[200px] flex justify-center items-center border-[#8e67f1] hover:border-b-8 duration-300  border  p-3 ">
              <div className="">
                <div className=" text-6xl font-bold w-full">56K</div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Homework Excellence
                </h2>
                {/* <p className="text-center">
                    All assignments reviewed and completed with expert feedback
                    to ensure top-notch quality.
                  </p> */}
              </div>
            </div>
            {/* Counter 2 */}
            <div className="text-center shadow-lg hover:shadow-2xl w-[200px] mx-auto h-[200px] flex justify-center items-center border-[#8e67f1] border-b-8 duration-300  border  p-3 ">
              <div className="">
                <div className=" text-6xl font-bold w-full">36K</div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Assignment Review
                </h2>
                {/* <p className="text-center">
                    All assignments reviewed and completed with expert feedback
                    to ensure top-notch quality.
                  </p> */}
              </div>
            </div>
            {/* Counter 3 */}
            <div className="text-center shadow-lg hover:shadow-2xl w-[200px] mx-auto h-[200px] flex justify-center items-center border-[#8e67f1] border-b-8 duration-300  border  p-3 ">
              <div className="">
                <div className=" text-6xl font-bold w-full">20K</div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Exam Mastery
                </h2>
                {/* <p className="text-center">
                    All assignments reviewed and completed with expert feedback
                    to ensure top-notch quality.
                  </p> */}
              </div>
            </div>
            {/* Counter 4 */}
            <div className="text-center lg:mt-10 border shadow-lg hover:shadow-2xl w-[200px] mx-auto h-[200px] border-[#8e67f1] hover:border-b-8 duration-300 flex justify-center items-center  p-3 ">
              <div className="">
                <div className=" text-6xl font-bold">99k</div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Tutoring Achievements
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#f2f2f2]  mb-10 py-20 ">
        <div className="sm:flex gap-6 justify-center w-11/12 mx-auto">
          <p className="font-bold text-5xl text-[#8e67f1] flex justify-center">
            <FaQuoteLeft />
          </p>
          <p className="font-bold sm:w-[50%] mx-auto sm:mx-0 text-center sm:text-left py-4 sm:py-0">
            We believe that learning should be accessible, engaging, and
            transformative. Our mission is to empower you to reach your fullest
            potential, no matter where you start. Together, let’s unlock new
            possibilities and inspire lifelong learning.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="">
          <div className="pt-8">
            <h2 className="font-bold text-center text-3xl">
              What Make Us Spcecial?
            </h2>
            <p className="md:w-[45%] mx-auto font-semibold text-center py-4">
              What makes us special is our personalized approach, innovative
              teaching, and commitment to empowering every learner's success.
            </p>
          </div>
          <div className="md:flex pt-10 pb-20 md:w-[80%] mx-auto gap-6 justify-between">
            <div className="card bg-base-100 md:w-96 rounded-none shadow-xl">
              <figure>
                <img
                  src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-7.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Who We Are</h2>
                <p>
                  We are a dedicated team focused on providing exceptional
                  educational services that inspire growth, passion, and
                  lifelong learning for every individual.
                </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            <div className="card bg-base-100 md:w-96 rounded-none shadow-xl">
              <figure>
                <img
                  src="https://eduma.thimpress.com/demo-udemy/wp-content/uploads/sites/93/2022/04/courses-4.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">What We Do</h2>
                <p>
                  We offer personalized educational services, including career
                  counseling, skill development, and expert guidance to help
                  individuals achieve their full potential and reach their
                  goals.
                </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
            <div className="card bg-base-100 md:w-96 rounded-none shadow-xl">
              <figure>
                <img
                  src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-8.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">How It Works</h2>
                <p>
                  We assess your needs, create a personalized plan, and provide
                  support to help you achieve your goals.
                </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
