import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import Sidebar from "../components/Sidebar";
import "./Page.css";


function Page() {
  useEffect(() => {
    document.body.classList.add("PAGE");
  }, []);

  return (
    <div>
      <Sidebar/>
      <nav class="navbar flex ">
        <i class="bx bx-menu" id="sidebar-open"></i>
        <button class="rectangle">
          <i class="bx bx-search" style={{ color: "#ffffff" }}></i>
        </button>
        <button class="rectangle-two">
          <i class="bx bx-slider" style={{ color: "#ffffff" }}></i>
        </button>
        <input
          type="text"
          placeholder="ค้นหาสถานที่ท่องเที่ยว"
          class="search_box"
        />

        <div class="custom-checkbox">
          <input id="status" type="checkbox" name="status"></input>
          <label for="status">
            <div
              class="status-switch"
              data-unchecked="❤️ full / xx:xx"
              data-checked="20   hearts"
            ></div>
          </label>
        </div>
        <span class="nav_username">USERNAME</span>
        <span class="navbar-image">
          <img
            src="https://cdn.pic.in.th/file/picinth/Image-60.png"
            alt="logo_img"
          />
        </span>
      </nav>

      <div class="navbar-second ">
        <button class="my-button">ศิลปะ</button>
        <button class="my-button">วัฒนธรรม</button>
        <button class="my-button">ศาสนา</button>
        <button class="my-button">ธรรมชาติ</button>
        <button class="my-button">อาหาร</button>
        <button class="my-button">สุขภาพ</button>
        <button class="my-button">บริการ</button>
        <button class="my-button">บันเทิง</button>
      </div>
    </div>
  );
}

export default Page;
