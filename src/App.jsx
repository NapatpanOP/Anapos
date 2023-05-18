import Nevbar from "./components/Nevbar/Nevbar"
import HomePage from "./HomePage"
import TypesWebPage from "./TypesWebPage"
import GraphPage from "./GraphPage"
import SugPage from "./SugPage"
import LoginPage from "./components/Login/LoginPage"
import SignupPage from "./components/Signup/SignupPage"
import './App.css'
import { Routes, Route } from "react-router-dom"
import AuthProvider from "./core/contexts/AuthProvider"
import ProtectedRoute from "./core/helpers/routers/ProtectedRoute"
import SelectGraphicsPositionPage from "./components/selectGraphicsPositionPage/SelectGraphicsPositionPage"
import SelectPositionPage from "./PositionPage/SelectPositionPage"
import GraphPosition from "./GraphPositionPage/GraphPositionPage"

function App() {
  return (
    <AuthProvider className="App">
      <Nevbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/typesweb" element={<TypesWebPage />}/>
        <Route path="/graph" element={
          <ProtectedRoute> 
            <GraphPage />
          </ProtectedRoute>}/>
        <Route path="/suggestion" element={<SugPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/select-graphics-position" element={<SelectGraphicsPositionPage /> }/>
        <Route path="/select-position" element={<SelectPositionPage /> }/>
        <Route path="/select-graphics-position/:id/:position" element={<SelectGraphicsPositionPage /> }/>
        <Route path="/graphposition" element={<GraphPosition /> }/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
