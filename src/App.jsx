import Nevbar from "./components/Nevbar/Nevbar"
import PageHome from "./PageHome"
import PageTypesWeb from "./PageTypesWeb"
import PageGraph from "./PageGraph"
import PageSug from "./PageSug"
import PageLogin from "./PageLogin"
import './App.css'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nevbar />
      <Routes>
        <Route path="/" element={<PageHome />}/>
        <Route path="/typesweb" element={<PageTypesWeb />}/>
        <Route path="/graph" element={<PageGraph />}/>
        <Route path="/suggestion" element={<PageSug />}/>
        <Route path="/login" element={<PageLogin />}/>
      </Routes>
    </div>
  );
}

export default App;
