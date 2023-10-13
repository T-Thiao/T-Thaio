import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

function Home() {

    useEffect(() => {
        document.body.classList.add('Home');
    }, []);

    return (
        <div>




            <nav class="navbar flex">

                <div class="container">
                    <div class="row">
                        <div class="col-0">
                            <span class="navbar-logo">
                                <img src="https://cdn.pic.in.th/file/picinth/logo372b1f98cc1b1ce9.png" alt="logo_img" />
                            </span>

                        </div>
                        <div class="col-6">
                            <span>เพิ่มเติม</span>
                        </div>
                        <div class="col-6">
                            <span>ติดต่อเรา</span>
                        </div>

                    </div>
                </div>

                <Link class="linking" to="/Login"><button class="loginNav px-5 py-2">เข้าสู่ระบบ</button></Link>
                <span class="navbar-profile">
                    <img src="https://cdn.pic.in.th/file/picinth/profile_default251f2cf9aef19747.png" alt="logo_img" />
                </span>

            </nav >



            <div id="sky">
                <div class="mountain_btm_left">
                </div>
                <div class="mountain_btm_mid">
                </div>
                <div class="mountain_btm_right">
                </div>
                <div class="h1 overlayerr">
                    DIDN’T  HAVE  AN  ACCOUNT  YET ?
                    <Link class="linking" to="/signup"><button class="h4 m-auto createHome">สร้างบัญชี</button></Link>
                </div>
            </div>


            <section>
                <div class="container">
                    <div class='pt-3'></div>
                    <div class="box text-start h1 py-5">
                        เว็บไซต์สำหรับคนไม่รู้จะไปไหนดี
                    </div>
                    <div class="box h4 text-start">
                        -----   คำโฆษณาเว็บไซต์
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;