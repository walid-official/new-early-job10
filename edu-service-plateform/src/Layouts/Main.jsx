import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Aos from "aos";
// https://education-service-d2fdb.web.app/
const Main = () => {
 

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease',
      once: false,
      offset: 0,
    });
}, []);



  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[500px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
