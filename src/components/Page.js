import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
// import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

function Page() {

  useEffect(() => {
    document.body.classList.add('PAGE');
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // JavaScript to handle button selection and data storage
  const buttons = document.querySelectorAll('.filterButton');
  const selectedCategories = [];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the 'selected' class to change the visual style
      button.classList.toggle('selected');

      // Retrieve the category data from the button's 'data-category' attribute
      const category = button.getAttribute('data-category');

      if (button.classList.contains('selected')) {
        if (!selectedCategories.includes(category)) {
          selectedCategories.push(category);

        }
        else {
          // If the button is deselected, remove the category from the array if it's present
          const index = selectedCategories.indexOf(category);
          if (index !== -1) {
            selectedCategories.splice(index, 1);
          }
        }
      } else {
        const index = selectedCategories.indexOf(category);
        if (index !== -1) {
          selectedCategories.splice(index, 1);
        }
      }




    });
  });




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
          <i class='bx bx-search' style={{ color: '#ffffff' }}  ></i>
        </div>
        <div class="rectangle-two">
          <i onClick={togglePopup} class='bx bx-slider' style={{ color: '#ffffff', cursor: 'pointer' }} ></i>



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
      </nav >

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

      {showPopup && (

        <div id="popupFilter" className="overlay">
          <div className="popup-inner" style={{ backgroundColor: '#00C2C1' }}>
            <div class="container">
              <div class="row py-4 px-4">
                <div class="col-11" >
                  <h2 style={{ textAlign: 'left', textTransform: 'uppercase' }}> Filter your destination</h2>
                </div>
                <div class="col-1">
                  <h2 class="closePopUp" style={{ textAlign: 'right', cursor: 'pointer' }} onClick={togglePopup}>X</h2>
                </div>
              </div>
              <div class="row px-4 py-4" style={{ backgroundColor: '#ffffff' }}>
                <div class="h3 pt-2 " style={{ textAlign: 'left', color: '#FE547B' }}><b>ความเกี่ยวข้อง</b></div>
                <div class="row justify-content-center py-4">
                  <div class="col-2 ButtonRow mx-5">
                    <button class="filterButton h4 py-2" data-category="art" name="art">ศิลปะ</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2" data-category="culture" name="culture">วัฒนธรรม</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2 " data-category="religion" name="religion">ศาสนา</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2" data-category="nature" name="nature">ธรรมชาติ</button>
                  </div>
                </div>

                <div class="row justify-content-center py-2">
                  <div class="col-2 ButtonRow mx-5">
                    <button class="filterButton h4 py-2" data-category="food" name="food">อาหาร</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2" data-category="health" name="health">สุขภาพ</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2" data-category="service" name="service">บริการ</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2" data-category="Entertain" name="Entertain">บันเทิง</button>
                  </div>
                </div>

              </div>

              <div class="row px-4 py-4" style={{ backgroundColor: '#ffffff' }}>
                <div class="h3" style={{ textAlign: 'left', color: '#FE547B' }}><b>ภูมิภาค</b></div>
                <div class="row justify-content-center py-4">
                  <div class="col-2 ButtonRow mx-5">
                    <button class="filterButton h4 py-2">กรุงเทพ</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2">ปทุมธานี</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2">นครปฐม</button>
                  </div>
                  <div class="col-2 ButtonRow mx-5" >
                    <button class="filterButton h4 py-2">นนทบุรี</button>
                  </div>
                </div>


              </div>

              <div class="row justify-content-center py-4 px-4" style={{ backgroundColor: 'white' }}>
                <div onClick={togglePopup} class="col-3 ButtonRow" >
                  <button class="filterButton" style={{ textAlign: 'center', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>OK</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      )
      }

    </div >
  );
}

export default Page;