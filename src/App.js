import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LogIn from "./page/Login";
import SignUp from "./page/SignUp";
import Home from "./page/Home";
import Page from "./page/Page";
import Webbord from "./page/Webbord";
import Mainbord from "./page/Mainbord";
import Recommended_Main from "./page/Recommended_Main";
import Notif_empty_Main from "./page/Notif_empty_Main";

import Profile from "./page/Profile";

import Like from "./page/Like";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/page" element={<Page />} />

          <Route path="/webbord" element={<Webbord />} />
          <Route path="/mainbord" element={<Mainbord />} />
          <Route path="/recommended_Main" element={<Recommended_Main />} />
          <Route path="/notif_empty_Main" element={<Notif_empty_Main />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/Like" element={<Like />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
