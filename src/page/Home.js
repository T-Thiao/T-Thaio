import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

function Home() {
  return (
    <div>
      
      <div id="sky">
        <div class="mountain_btm_left"></div>
        <div class="mountain_btm_mid"></div>
        <div class="mountain_btm_right"></div>
        <div class="text-6xl overlayerr">
          Didn't have an account yet?
          <a href="/Signup">
            <button class="h4 m-auto createHome ">สร้างบัญชี</button>
          </a>
        </div>
      </div>

      <section>
        <div class="container">
          <div class="pt-3"></div>
          <div class="box text-start h1 py-4">
            เว็บไซต์สำหรับคนไม่รู้จะไปไหนดี ! ! !
          </div>
          <div class="box h4 text-start">Have a nice day.</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
