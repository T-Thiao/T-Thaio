import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Recommended_Main.css";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import Sidebar from "../components/Sidebar";

function Recommended_Main() {
  useEffect(() => {
    document.body.classList.add("Recommended_Main");
  }, []);

  return (
    <div>
     <Sidebar/>
    </div>
  );
}

export default Recommended_Main;
