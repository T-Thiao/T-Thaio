import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Page.css';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

function Page() {

  useEffect(() => {
    document.body.classList.add('PAGE');
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
    <a href="/Page" class="link flex">
      <i class='bx bx-map'></i>
      <span class='linkTo'>เเมตช์ที่ที่ใช่</span>
    </a>
  </li>
  <li class="item">
    <a href="/Mainbord" class="link flex">
      <i class='bx bx-credit-card-front'></i>
      <span class='linkTo'>เว็บบอร์ด</span>
    </a>
  </li>
</ul>

<ul class="menu_item">
  <li class="item">
    <a href="/Recommended_Main" class="link flex">
      <i class='bx bx-check-circle'></i>
      <span class='linkTo'>สถานที่เเนะนำ</span>
    </a>
  </li>
  <li class="item">
    <a href="/Notif_empty_Main" class="link flex">
      <i class='bx bx-bell'></i>
      <span class='linkTo'>การเเจ้งเตือน</span>
    </a>
  </li>
  <li class="item">
    <a href="/Profile" class="link flex">
      <i class='bx bx-user'></i>
      <span class='linkTo'>โปรไฟล์</span>
    </a>
  </li>
  <li class="item">
    <a href="/Like" class="link flex">
      <i class='bx bx-heart'></i>
      <span class='linkTo'>ที่เที่ยวที่ถูกใจ</span>
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

      <nav class="navbar flex">
      <i class="bx bx-menu" id="sidebar-open"></i>
      <div class="rectangle">
        <i class='bx bx-search' style={{color: '#ffffff'}}  ></i>
    </div>
    <div class="rectangle-two">
      <i class='bx bx-slider'  style={{color: '#ffffff'}} ></i>
  </div>
      <input type="text" placeholder="ค้นหาสถานที่ท่องเที่ยว" class="search_box" />
      
      
      

      <div class="custom-checkbox">
        <input id="status" 
               type="checkbox" 
               name="status"></input>
        <label for="status">
          <div class="status-switch"
               data-unchecked="❤️ full / xx:xx"
               data-checked="20   hearts">
          </div>
        </label>
      </div>
      <span class="nav_username">USERNAME</span>
      <span class="navbar-image">
        <img src="https://cdn.pic.in.th/file/picinth/Image-60.png" alt="logo_img" />
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