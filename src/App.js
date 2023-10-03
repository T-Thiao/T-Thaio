import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LogIn from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Page from './components/Page';
import Webbord from './components/Webbord';
import Mainbord from './components/Mainbord';
import Recommended_Main from './components/Recommended_Main';
import Notif_empty_Main from './components/Notif_empty_Main';
import Notif_new from './components/Notif_new';
import Notif_add from './components/Notif_add';
import Profile from './components/Profile';
import Profile_edit from './components/Profile_edit';
import Like from './components/Like';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page" element={<Page />} />
          <Route path="/webbord" element={<Webbord />} />
          <Route path="/mainbord" element={<Mainbord />} />
          <Route path="/recommended_Main" element={<Recommended_Main />} />
          <Route path="/notif_empty_Main" element={<Notif_empty_Main />} />
          <Route path="/notif_new" element={<Notif_new />} />
          <Route path="/notif_add" element={<Notif_add />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile_edit" element={<Profile_edit />} />
          <Route path="/Like" element={<Like />} />


        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

