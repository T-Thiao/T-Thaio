import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Login.css';
import axios from "axios";

function Signup() {

  useEffect(() => {
    localStorage.clear();
    document.body.classList.add('SIGNUP');

    return () => {
      document.body.classList.remove('SIGNUP');
    }
  }, []);

  const [text, setText] = useState(" ");
  const [showIcon, setShowIcon] = useState(false);

  const AlreadyUse = () => {
    setShowIcon(true);
    setText("This username is already in use");
  };

  const Reqiured = () => {
    setShowIcon(true);
    setText("Please enter required info");
  };

  const navigate = useNavigate()
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    email: "",
    name: ""
  })

  async function SingUpHandler() {
    if (signupUser.username == "" ||
      signupUser.password == "" ||
      signupUser.phone == "") {
      console.log("Please enter reqiured info")
      Reqiured();
    }
    else {
      try {
        const res = await axios({
          url: 'https://localhost:7161' + '/api/User/Register',
          method: 'POST',
          data: {
            email: signupUser.email,
            Password: signupUser.password,
            Phone: signupUser.phone
          },
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log("Sign Up Successfully")
        setTimeout(() => {
          return navigate('/login');
        }, 2500);

      }
      catch (err) {
        console.log("This username is already in use")
        AlreadyUse();

      }
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
              <div class="h2 pt-5  text-start" style={{ color: 'black' }}>
                Create new account
              </div>
              <form class='formTextSignup'>
                <label>Name</label>
                <input onChange={(e) => {
                  setSignupUser({
                    ...signupUser,
                    username:
                      e.target.value,
                  })
                }}
                  type="name" maxLength="10" onKeyDown={handleKeyDown} placeholder="" />
                <label>User Name</label>
                <input onChange={(e) => {
                  setSignupUser({
                    ...signupUser,
                    username:
                      e.target.value,
                  })
                }}
                  type="username" maxLength="10" onKeyDown={handleKeyDown} placeholder="" />
                <label>E-mail</label>
                <input onChange={(e) => {
                  setSignupUser({
                    ...signupUser,
                    username:
                      e.target.value,
                  })
                }}
                  type="email" maxLength="10" onKeyDown={handleKeyDown} placeholder="" />
                <label>Password</label>
                <input onChange={(e) => {
                  setSignupUser({
                    ...signupUser,
                    password:
                      e.target.value,
                  })
                }} type={inputType} onKeyDown={handleKeyDown} placeholder="" /><span style={{ cursor: 'pointer' }} onClick={handlePasswordClick} className={inputClassName}></span>
              </form>
              <div class="p text-start pt-4" style={{ color: 'red' }} >
                <span class="me-2">{showIcon && <i class="fa-solid fa-circle-info"></i>}</span>
                <span>{text}</span>

              </div>
              <div class='pb-5'>
                <button onClick={SingUpHandler}
                  className="CREATE">Create Account</button></div>
              <div className="not-member" class='textNewUserSignup py-5'>
                Already a member? <Link to="/login"><b>Log in</b></Link>
              </div>
            </div>
            <div class="col-6 signupLogin" >
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Signup