import React, { Component, useState, useEffect } from "react";
import "./Mainbord.css";
import Sidebar from "../components/Sidebar";


function Mainbord() {
  useEffect(() => {
    document.body.classList.add("Mainbord");
  }, []);

  return (
    <div>
      <Sidebar/>

      <nav class="navbarBoard flex">
        <span class="nav_usernamebord">เว็บบอร์ดที่เที่ยว</span>
      </nav>
      <div className="flex flex-col font-Mitr">
      <div className="flex pt-24">
        <div className="w-36"></div>
        <div className="bg-[#FFE3E0] rounded-full inline-block h-96 w-96 m-15 text-center ">
          <div className="pt-36 text-[#FF8B8B] text-4xl font-bold">
            LOGO ? STHy
          </div>
          <div className="font-bold pt-16 text-lg ">
            No Review Here
          </div>
          <div className="text-xs font-bold text-[#7D7D7D]">
            There is no review to show right now.
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mainbord;
