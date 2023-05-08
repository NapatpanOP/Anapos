import Nevbar from "./components/Nevbar/Nevbar"
import HomePage from "./HomePage"
import TypesWebPage from "./TypesWebPage"
import GraphPage from "./GraphPage"
import SugPage from "./SugPage"
import LoginPage from "./components/Login/LoginPage"
import SignupPage from "./components/Signup/SignupPage"
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  const loginUser = localStorage.getItem('user') ?? false;
  return (
    <div className="App">
      <Nevbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/typesweb" element={<TypesWebPage />}/>
        <Route path="/graph" element={<GraphPage />}/>
        <Route path="/suggestion" element={<SugPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
      </Routes>
    </div>
  );
}

export default App;
