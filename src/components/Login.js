import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import axios from 'axios';


function Login() {

    const [showPopupIncorrect, setShowPopupIncorrect] = useState(false);
    const [text, setText] = useState(" ");
    const [showIcon, setShowIcon] = useState(false);

    const userIncorrect = () => {
        setShowIcon(true);
        setText("Username or Password Incorrect");
    };

    useEffect(() => {
        localStorage.clear();
        document.body.classList.add('LOGIN');

        return () => {
            document.body.classList.remove('LOGIN');
        }

    }, []);



    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    async function Login() {
        try {
            const res = await axios({
                url: 'https://localhost:7161' + '/api/User/Login',
                method: 'POST',
                data: {
                    email: userLogin.email,
                    Password: userLogin.password,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            })


            localStorage.setItem('token', res.data)

            setTimeout(() => {
                return navigate('/Page');
            }, 1500);

        }
        catch (error) {
            console.log("Username or Password Incorrect")

            userIncorrect();

        }
    }

    function handleKeyDown(event) {
        if (event.keyCode === 32) { // keyCode for spacebar is 32
            event.preventDefault();
        }
    }

    const [inputType, setInputType] = useState('password');
    const [inputClassName, setInputClassName] = useState('fa-regular fa-eye-slash');

    const handlePasswordClick = () => {
        setInputType(inputType === 'text' ? 'password' : 'text');
        setInputClassName(inputClassName === 'fa-regular fa-eye' ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye');
    };



    return (
        <div>

            <div className="wrapper">
                <div class='container'>
                    <div class="row">
                        <div class="col-12 col-xl-6 px-5">
                            <div class="h2 pt-5 pb-3 text-start" style={{ color: 'black' }}>
                                Login
                            </div>
                            <div class="h6 text-start pb-4" style={{ color: '#999999' }}>
                                Welcome! Please login to your account.
                            </div>
                            <form class='formTextLogin'>
                                <label >E-mail</label>
                                <input onChange={(e) => {
                                    setUserLogin({
                                        ...userLogin,
                                        username:
                                            e.target.value,
                                    })
                                }}
                                    type="username" maxLength="10" onKeyDown={handleKeyDown} placeholder="" />
                                <label>Password</label>
                                <input onChange={(e) => {
                                    setUserLogin({
                                        ...userLogin,
                                        password:
                                            e.target.value,
                                    })
                                }}
                                    type={inputType} onKeyDown={handleKeyDown} placeholder="" /><span style={{ cursor: 'pointer' }} onClick={handlePasswordClick} className={inputClassName}></span>
                            </form>

                            <div class="p text-start pt-4" style={{ color: 'red' }} >
                                <span class="me-2">{showIcon && <i class="fa-solid fa-circle-xmark"></i>}</span>
                                <span>{text}</span></div>
                            <div class='pb-5'>
                                <button className="m-auto START" onClick={Login} >Login</button></div>
                            <div className="not-member" class='textNewUserLogin py-5'>
                                New User? <Link to="/signup"><b>Signup</b></Link>
                            </div>
                        </div>
                        <div class="col-6 logoLogin" >
                        </div>

                    </div>
                </div>
            </div>






        </div>


    );
}

export default Login;