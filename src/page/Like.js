import React, { Component, useState, useEffect } from "react";
import "./Like.css";
import Sidebar from "../components/Sidebar";

function Like() {
  useEffect(() => {
    document.body.classList.add("Like");
  }, []);

  return (
    <div>
      <Sidebar/>
    </div>
  );
}

export default Like;
