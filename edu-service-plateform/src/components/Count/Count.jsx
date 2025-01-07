import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import counterImg from "../../assets/images/counter.png"
const Count = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="w-11/12 mx-auto pt-10 pb-5" >
      <div className="py-10">
        <div className="flex py-8 gap-3 justify-center items-center">
          <div className="bg-[#8e67f1] w-10 md:w-20 h-1"></div>
          <h3 className="text-center font-bold text-2xl md:text-4xl">
            Achieved Goals - Education Services
          </h3>
          <div className="bg-[#8e67f1] w-10 md:w-20 h-1"></div>
        </div>
        <div className="">
          <p className="md:w-[40%] mx-auto text-center font-bold">
            Celebrate your achievements with our successfully completed
            education services. Your goals are now a reality!
          </p>
        </div>
      </div>
      <div className="lg:flex justify-evenly gap-8">
        <div className="flex items-center justify-center" data-aos="zoom-in" data-aos-mirror="false"  data-aos-once="false">
          <img
            src={counterImg}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center" data-aos="fade-up" data-aos-mirror="false"  data-aos-once="false">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="grid md:grid-cols-2 py-20 gap-8 justify-between">
              {/* Counter 1 */}
              <div className="text-center shadow-2xl w-[200px] h-[200px] flex justify-center items-center border-[#8e67f1] border-b-8  border rounded-full p-3 text-[#5e3598]">
                <div className="">
                  <div className=" text-6xl font-bold w-full">
                    {counterOn && <CountUp end={58.6} />}K
                  </div>
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
              <div className="text-center shadow-2xl w-[200px] h-[200px] flex justify-center items-center border-[#8e67f1] border-b-8  border rounded-full p-3 text-[#5e3598]">
                <div className="">
                  <div className=" text-6xl font-bold w-full">
                    {counterOn && <CountUp end={36} />}K
                  </div>
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
              <div className="text-center shadow-2xl w-[200px] h-[200px] flex justify-center items-center border-[#8e67f1] border-b-8  border rounded-full p-3 text-[#5e3598]">
                <div className="">
                  <div className=" text-6xl font-bold w-full">
                    {counterOn && <CountUp end={20} />}K
                  </div>
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
              <div className="text-center border shadow-2xl w-[200px] h-[200px] border-[#8e67f1] border-b-8 flex justify-center items-center rounded-full p-3 text-[#5e3598]">
                <div className="">
                <div className=" text-6xl font-bold">
                  {counterOn && <CountUp end={99} />}K
                </div>
                <h2 className="text-center py-3 font-bold text-xl ">
                Tutoring Achievements
                </h2>
                {/* <p className="text-center ">
                  Highly rated experts with proven excellence.
                </p> */}
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Count;
