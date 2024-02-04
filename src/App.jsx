import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPPage from "./Pages/ForgotPPage.jsx";
import ResetPPage from "./Pages/ResetPPage.jsx";
import PasswordTokenPage from "./Pages/PasswordTokenPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import DashBoardPage from "./Pages/DashBoardPage.jsx";
import ListOfQuizPage from "./Pages/ListOfQuizPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
           <Route exact path="/signup" element={<SignUpPage/>}/>
           <Route exact path="/dashboard" element={<DashBoardPage/>}/>
           <Route exact path="/list-of-quiz/:subjectName" element={<ListOfQuizPage/>}/>
            <Route exact path="/signin/:credential" element={<SignInPage/>} />
            <Route exact path="/forgot-password" element={<ForgotPPage />} />
            <Route exact path="/reset-password" element={<PasswordTokenPage />} />
            <Route exact path="/reset-password/:token" element={<ResetPPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
