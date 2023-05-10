import Nevbar from "./components/Nevbar/Nevbar"
import HomePage from "./HomePage"
import TypesWebPage from "./TypesWebPage"
import GraphPage from "./GraphPage"
import SugPage from "./SugPage"
import LoginPage from "./components/Login/LoginPage"
import SignupPage from "./components/Signup/SignupPage"
import YoutubePage from "./PositionPage/YoutubePage"
import ViuPage from "./PositionPage/ViuPage"
import TrueIDPage from "./PositionPage/TrueIDPage"
import ThairathPage from "./PositionPage/ThairathPage"
import SanookPage from "./PositionPage/SanookPage"
import JibPage from "./PositionPage/JibPage"
import DailynewsPage from "./PositionPage/DailynewsPage"
import BananaPage from "./PositionPage/BananaPage"
import AdvicePage from "./PositionPage/AdvicePage"
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
        <Route path="/youtubepage" element={<YoutubePage />}/>
        <Route path="/viupage" element={<ViuPage />}/>
        <Route path="/trueIDpage" element={<TrueIDPage />}/>
        <Route path="/thairathpage" element={<ThairathPage />}/>
        <Route path="/sanookpage" element={<SanookPage />}/>
        <Route path="/jibpage" element={<JibPage />}/>
        <Route path="/dailynewspage" element={<DailynewsPage />}/>
        <Route path="/bananapage" element={<BananaPage />}/>
        <Route path="/advicepage" element={<AdvicePage />}/>
      </Routes>
    </div>
  );
}

export default App;
