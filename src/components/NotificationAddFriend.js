import React, { Component, useState, useEffect } from "react";
function NotificationAddFriend() {
  
  return (
    <div className="flex">
      <div className="md:w-60 bg-black text-cyan-600"></div>

      <div className="bg-[#FFF9E2] h-32 w-full container md:flex justify-between items-center border-b border-gray-300 ">
        <div className="flex items-center  gap-10 ">
          <div className="w-24"></div>
          <div>
            <div className="bg-[#FE547B] rounded-full inline-block h-3 w-3  text-center "></div>
          </div>
          <img
            class="w-20 h-20 rounded-full border border-gray-500 "
            src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
            alt=""
          ></img>
          <div className="flex gap-2 text-black">
            <div className="font-bold">name </div>
            <div>added you.</div>
          </div>
        </div>
        <div className="flex gap-8 pr-10">
          <button className="bg-green-500 hover:bg-green-800 w-22 h-10 text-white font-bold py-2 px-4 rounded-full">
            ACCEPT
          </button>
          <button className="bg-gray-500 hover:bg-gray-800 w-22 h-10  text-white font-bold py-2 px-4 rounded-full">
            DENY
          </button>
        </div>
      </div>
    </div>
  );
}
export default NotificationAddFriend;