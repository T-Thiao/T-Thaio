import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Webbord.css";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import Sidebar from "../components/Sidebar";

function Webbord() {
  useEffect(() => {
    document.body.classList.add("Webbord");
  }, []);

  return (
    <div>
      <Sidebar />
      <nav class="navbarBoard flex">
        <div class="rectangle-icon">
          <Link to="/mainbord">
            <i class="bx bxs-chevron-left" style={{ color: "#ffffff" }}></i>
          </Link>
        </div>
        <span class="nav_usernamebord">เว็บบอร์ดที่เที่ยว</span>
      </nav>
    </div>
  );
}

export default Webbord;
