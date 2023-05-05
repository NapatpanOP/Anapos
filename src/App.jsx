import Nevbar from "./components/Nevbar/Nevbar"
import HomePage from "./HomePage"
import TypesWebPage from "./TypesWebPage"
import GraphPage from "./GraphPage"
import SugPage from "./SugPage"
import LoginPage from "./components/Login/LoginPage"
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nevbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/typesweb" element={<TypesWebPage />}/>
        <Route path="/graph" element={<GraphPage />}/>
        <Route path="/suggestion" element={<SugPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
