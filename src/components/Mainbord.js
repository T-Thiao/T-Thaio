import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Mainbord.css';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

function Mainbord() {

  useEffect(() => {
    document.body.classList.add('Mainbord');
}, []);


    return (
        <div>
    <nav class="sidebar locked">
      <div class="logo_items flex">
        <span class="nav_image">
        <Link to="/Page"><img src="https://cdn.pic.in.th/file/picinth/T_Logo-5-2bdaa454b8d6e8773.png" alt="logo_img" /></Link>
        </span>
      </div>
      <div class="menu_container">
  <div class="menu_items">
    <ul class="menu_item">
      <li class="item">
        <a class="link flex">
          <i class='bx bx-map'></i>
          <Link to="/Page"><span class='linkTo'>เเมตช์ที่ที่ใช่</span></Link>
        </a>
      </li>
      <li class="item">
        <a href="#" class="link flex">
          <i class='bx bx-credit-card-front'></i>
          <Link to="/Mainbord"><span class='linkTo'>เว็บบอร์ด</span></Link>
        </a>
      </li>
    </ul>

    <ul class="menu_item">
      <li class="item">
        <a href="#" class="link flex">
          <i class='bx bx-check-circle'></i>
          <Link to="/recommended_Main"><span class='linkTo'>สถานที่เเนะนำ</span></Link>
        </a>
      </li>
      <li class="item">
        <a href="#" class="link flex">
          <i class='bx bx-bell'></i>
          <Link to="/Notif_empty_Main"><span class='linkTo'>การเเจ้งเตือน</span></Link>
        </a>
      </li>
      <li class="item">
        <a href="#" class="link flex">
          <i class='bx bx-user'></i>
          <Link to="/Profile"><span class='linkTo'>โปรไฟล์</span></Link>
        </a>
      </li>
      <li class="item">
        <a href="#" class="link flex">
          <i class='bx bx-heart'></i>
          <Link to="/Like"><span class='linkTo'>ที่เที่ยวที่ถูกใจ</span></Link>
        </a>
      </li>
    </ul>
  </div>

  <div class="sidebar_profile flex">
    <span class="profile_image">
      <img src="https://cdn.pic.in.th/file/picinth/Image-60.png" alt="logo_img" />
    </span>
    <div class="data_text">
      <i class='bx bx-dots-horizontal-rounded'></i>
      <span class="sidebar-name">NAME</span>
      <span class="sidebar-username">USERNAME</span>
    </div>
  </div>
</div>
      </nav>

      <nav class="navbarBoard flex">
     
  <span class="nav_usernamebord">เว็บบอร์ดที่เที่ยว</span>
      
     
    
      
    </nav>
        </div>
        
    );
}

export default Mainbord;
