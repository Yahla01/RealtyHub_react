import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SavedApartments from "./dashboard/component/SavedApartments";
import UserProfileUpdate from "./dashboard/component/UserProfileUpdate";
import LandingPage from "./dashboard/component/LandingPage";
import ChatBox from "./dashboard/component/ChatBox";
import Notifications from "./dashboard/component/Notifications";
import PersonalityTest from "./dashboard/component/PersonalityTest";
import { Navigate } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<UserProfileUpdate />} />
          <Route path="/chatBox" element={<ChatBox />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/personalityTest" element={<PersonalityTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
