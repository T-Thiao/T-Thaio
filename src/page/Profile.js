import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import Sidebar from "../components/Sidebar";

function Profile() {
  useEffect(() => {
    document.body.classList.add("Profile");
  }, []);

  return (
    <div>
     <Sidebar/>
    </div>
  );
}

export default Profile;
