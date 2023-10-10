import React, { Component, useState, useEffect } from "react";
import "./Notif_empty_Main.css";
import NotificationAddFriend from "../components/NotificationAddFriend";
import Sidebar from "../components/Sidebar";
import NavbarNotifications from "../components/NavbarNotifications";
function Notif_empty_Main() {
  useEffect(() => {
    document.body.classList.add("Notif_empty_Main");
  }, []);

  return (
    <div>
      <Sidebar />
      <NavbarNotifications />

      {/* <div className="flex flex-col font-Mitr ">
        <div className=" flex pt-24">
          <div className="w-36"></div>
          <div className="bg-[#FFE3E0] rounded-full inline-block h-96 w-96 m-15 text-center ">
            <div className="pt-36 text-[#FF8B8B] text-4xl font-bold">
              LOGO ? STHy
            </div>
            <div className="font-bold pt-16 text-lg ">No Notification Here</div>
            <div className="text-xs font-bold text-[#7D7D7D]">
              There is no notification to show right now.
            </div>
          </div>
        </div>
      </div> */}
      <NotificationAddFriend />
      <NotificationAddFriend />
      <NotificationAddFriend />
      <NotificationAddFriend />
      <NotificationAddFriend />
      <NotificationAddFriend />
      <NotificationAddFriend />
      <NotificationAddFriend />
    </div>
  );
}

export default Notif_empty_Main;
