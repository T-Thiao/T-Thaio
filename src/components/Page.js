import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
// import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

function Page() {

  useEffect(() => {
    document.body.classList.add('PAGE');
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(!showPopup);
  };

  const displayPopup = () => {
    setShowPopup(!showPopup);
  };

  const [activeButtons, setActiveButtons] = useState([]);
  const [activeButtonsRegion, setActiveButtonsRegion] = useState([]);


  const buttonsPerRow = 3;
  const buttonMargin = '10px';

  const buttons = [
    { label: 'ศิลปะ', category: 'art' },
    { label: 'วัฒนธรรม', category: 'culture' },
    { label: 'ศาสนา', category: 'religion' },
    { label: 'ธรรมชาติ', category: 'nature' },
    { label: 'อาหาร', category: 'art' },
    { label: 'สุขภาพ', category: 'health' },
    { label: 'บริการ', category: 'service' },
    { label: 'บันเทิง', category: 'entertain' }
  ];

  const buttonsRegion = [
    { label: 'กรุงเทพ', category: 'bkk' },
    { label: 'ปทุมธานี', category: 'Pathum' },
    { label: 'นครปฐม', category: 'NakhonPathom' },
    { label: 'นนทบุรี', category: 'Nonthaburi' },
  ];



  const handleButtonClick = (index) => {
    // Check if the button is already in the activeButtons array
    if (activeButtons.includes(index)) {
      // Button is already active, remove it
      setActiveButtons(activeButtons.filter((item) => item !== index));
    } else {
      // Button is not active, add it
      setActiveButtons([...activeButtons, index]);
    }
  };

  const handleButtonRegionClick = (index) => {
    // Check if the button is already in the activeButtons array
    if (activeButtonsRegion.includes(index)) {
      // Button is already active, remove it
      setActiveButtonsRegion(activeButtonsRegion.filter((item) => item !== index));
    } else {
      // Button is not active, add it
      setActiveButtonsRegion([...activeButtonsRegion, index]);
    }
  };


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
          <i onClick={displayPopup} class='bx bx-slider' style={{ color: '#ffffff', cursor: 'pointer' }} ></i>



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
                  <h2 class="closePopUp" style={{ textAlign: 'right', cursor: 'pointer' }} onClick={closePopup}>X</h2>
                </div>
              </div>
              <div class="row px-4 py-4" style={{ backgroundColor: '#ffffff' }}>
                <div class="h3 pt-2 " style={{ textAlign: 'left', color: '#FE547B' }}><b>ความเกี่ยวข้อง</b></div>
                <div class="row justify-content-center py-4">

                  {buttons.map((button, index) => (
                    <div
                      key={index}
                      className={`col-2 ButtonRow mx-5 ${activeButtons.includes(index) ? 'active' : ''
                        }`}
                      style={{ margin: buttonMargin }}
                    >
                      <div
                        data-category={button.category}
                        name={button.label}
                        onClick={() => handleButtonClick(index)}
                      >
                        <button class="filterButton h4 py-2">{button.label}</button>
                      </div>
                    </div>
                  ))}
                  <div style={{ clear: 'both' }}></div>

                </div>

              </div>

              <div class="row px-4 py-2" style={{ backgroundColor: '#ffffff' }}>
                <div class="h3" style={{ textAlign: 'left', color: '#FE547B' }}><b>ภูมิภาค</b></div>
                <div class="row justify-content-center py-4">

                  {buttonsRegion.map((button, index) => (
                    <div
                      key={index}
                      className={`col-2 ButtonRow mx-5 ${activeButtonsRegion.includes(index) ? 'active' : ''
                        }`}
                      style={{ margin: buttonMargin }}
                    >
                      <div
                        data-category={button.category}
                        name={button.label}
                        onClick={() => handleButtonRegionClick(index)}
                      >
                        <button class="filterButton h4 py-2">{button.label}</button>
                      </div>
                    </div>
                  ))}
                  <div style={{ clear: 'both' }}></div>


                </div>


              </div>

              <div class="row justify-content-center pb-4 px-4" style={{ backgroundColor: 'white', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                <div onClick={displayPopup} class="col-3 ButtonApplyRow">
                  <button class="filterButton h4 py-2" style={{
                    textAlign: 'center'
                  }}>Apply Filter</button>
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