import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import axios from "axios";

function Login() {
  const [showPopupCorrect, setShowPopupCorrect] = useState(false);
  const [showPopupIncorrect, setShowPopupIncorrect] = useState(false);

  useEffect(() => {
    localStorage.clear();
    document.body.classList.add("LOGIN");

    return () => {
      document.body.classList.remove("LOGIN");
    };
  }, []);

  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  async function Login() {
    try {
      const res = await axios({
        url: "https://localhost:7161" + "/api/User/Login",
        method: "POST",
        data: {
          Username: userLogin.username,
          Password: userLogin.password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem("token", res.data);
      setShowPopupCorrect(true);
      setTimeout(() => {
        setShowPopupCorrect(false);
        return navigate("/home");
      }, 1500);
    } catch (error) {
      console.log("Username or Password Incorrect");
      setShowPopupIncorrect(true);
      setTimeout(() => {
        setShowPopupIncorrect(false);
      }, 2500);
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 32) {
      // keyCode for spacebar is 32
      event.preventDefault();
    }
  }

  const [inputType, setInputType] = useState("password");
  const [inputClassName, setInputClassName] = useState(
    "fa-regular fa-eye-slash"
  );

  const handlePasswordClick = () => {
    setInputType(inputType === "text" ? "password" : "text");
    setInputClassName(
      inputClassName === "fa-regular fa-eye"
        ? "fa-regular fa-eye-slash"
        : "fa-regular fa-eye"
    );
  };

  return (
    <div>
      <div className="wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-6 px-5 ">
              <div class="h2 pt-5 pb-3 text-start">Login</div>
              <div class="h6 text-start pb-4" style={{ color: "#999999" }}>
                Welcome back! Please login to your account.
              </div>
              <form class="formTextLogin">
                <label>E-mail</label>
                <input
                  onChange={(e) => {
                    setUserLogin({
                      ...userLogin,
                      username: e.target.value,
                    });
                  }}
                  type="username"
                  maxLength="10"
                  onKeyDown={handleKeyDown}
                  placeholder=""
                />
                <label>Password</label>
                <input
                  onChange={(e) => {
                    setUserLogin({
                      ...userLogin,
                      password: e.target.value,
                    });
                  }}
                  type={inputType}
                  onKeyDown={handleKeyDown}
                  placeholder=""
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={handlePasswordClick}
                  className={inputClassName}
                ></span>
              </form>
              <div class="pb-5">
                <button className="m-auto START" onClick={Login}>
                  Login
                </button>
              </div>
              <div className="not-member" class="textNewUserLogin py-5">
                New User?{" "}
                <Link to="/signup">
                  <b>Signup</b>
                </Link>
              </div>
            </div>
            <div class="col-6 logoLogin"></div>
          </div>
        </div>
      </div>
      {showPopupIncorrect && (
        <div id="popup4" className="overlay">
          <div className="popup4 h1 text-center">
            <div className="h4 py-4" style={{ color: "white" }}>
              Username or Password Incorrect
            </div>
          </div>
        </div>
      )}
      {showPopupCorrect && (
        <div id="popup4" className="overlay">
          <div className="popup4 h1 text-center">
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "green" }}
            ></i>
            <div className="h4 py-4">
              <b>Welcome to MEALMATE!</b>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
