import React from "react";
import professor from "../../assets/images/professor.png"
const SpecialService = () => {
  return (
    <div className="pb-20 w-11/12 mx-auto">
      <div className="text-center py-20">
        <div className="flex py-4 gap-3 justify-center items-center">
          <div className="bg-[#8e67f1] w-10 md:w-20 h-1"></div>
          <h3 className="text-center font-bold text-3xl md:text-4xl">
            Exclusive Education Services
          </h3>
          <div className="bg-[#8e67f1] w-10 md:w-20 h-1"></div>
        </div>

        <p className="md:w-[50%] mx-auto font-bold py-4">
          Unlock personalized learning with our Exclusive Education Services,
          designed to cater to your individual needs. From specialized tutoring
          to tailored academic support, we provide exceptional guidance to help
          you reach your full potential.
        </p>
      </div>
      <div className="lg:flex justify-between">
        <div className="grid lg:grid-cols-2 gap-4 lg:w-[50%]" data-aos="fade" data-aos-mirror="false"  data-aos-once="false">
          <div className="card bg-base-100 border-[#8e67f1] border-l-8 border-r-8  border shadow-2xl">
            <div className="card-body flex justify-center items-center">
             <div className="">
             <h2 className="card-title">Personalized Tutoring Sessions</h2>
              <p className="py-2">
                Our Personalized Tutoring Sessions are tailored to meet your
                unique learning needs. With one-on-one guidance, we focus on
                strengthening your skills.
              </p>
             </div>
            </div>
          </div>
          <div className="card bg-base-100  border-l-8  border-r-8 border-[#8e67f1] border shadow-2xl">
            <div className="card-body flex justify-center items-center">
             <div className="">
             <h2 className="card-title">Mock Interview Sessions</h2>
              <p className="py-2">
                Prepare for success with our Mock Interview Sessions. Get
                personalized feedback, improve your interview skills, and boost
                your confidence to ace real interviews.
              </p>
             </div>
            </div>
          </div>
          <div className="card bg-base-100 border-l-8  border-r-8 border-[#8e67f1] border shadow-2xl">
            <div className="card-body flex justify-center items-center">
              <div className="">
              <h2 className="card-title">Career Pathway Counseling</h2>
              <p className="py-2">
                Our Career Pathway Counseling helps you explore and define your
                professional journey. Receive expert advice on choosing the
                right career, setting goals, and navigating your path to
                success.
              </p>
              </div>
              
            </div>
          </div>
          <div className="card bg-base-100 border-[#8e67f1] border-l-8  border-r-8  border shadow-2xl">
            <div className="card-body flex justify-center items-center">
             <div className="">
             <h2 className="card-title">Online Workshop Coordination</h2>
              <p className="py-2">
                Our Online Workshop Coordination ensures seamless planning and
                execution of virtual learning events. We handle scheduling,
                content organization.
              </p>
             </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl pt-6 lg:pt-0 flex items-center justify-center border" data-aos="fade-up" data-aos-mirror="false"  data-aos-once="false">
          <img
            className="w-full object-cover"
            src={professor}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
