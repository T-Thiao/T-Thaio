import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../page/Notif_empty_Main.css"
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

function navbarNotifications() {
  return (
      <nav className="navbarBoard shadow-md w-full fixed top-0 lef-0 z-50">
        <span className="nav_usernamebord">Notifications</span>
      </nav>
  );
}

export default navbarNotifications;
