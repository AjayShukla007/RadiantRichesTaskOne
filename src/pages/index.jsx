import React from "react";
import { Button, Img, Line, List, SelectBox, Text } from "components";
import Navbar from "./Nav/Navbar";
import Update from "./interaction/Update";
import Nav2 from "./Nav/Nav2";
import Breadcrumbs from "./home/Breadcrumbs";
import Hosting from "./interaction/Hosting";
import Footer from "./Nav/Footer";
import Signup from "./interaction/Signup";

const FramePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter justify-end mx-auto w-full">
        <Navbar />
        <main>
          <div className="flex flex-col items-center md:px-5 container mx-auto">
            <div className=" flex flex-col max-w-7xl">
              <Update />
              <Nav2 />
              <Breadcrumbs />
              <Hosting />
              <Signup />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FramePage;
