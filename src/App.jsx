import Nevbar from "./components/Nevbar/Nevbar"
import HomePage from "./HomePage"
import TypesWebPage from "./TypesWebPage"
import GraphPage from "./GraphPage"
import SugPage from "./SugPage"
import LoginPage from "./components/Login/LoginPage"
import SignupPage from "./components/Signup/SignupPage"
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import AuthProvider from "./core/contexts/AuthProvider"
import ProtectedRoute from "./core/helpers/routers/ProtectedRoute"
import SelectGraphicsPositionPage from "./components/selectGraphicsPositionPage/SelectGraphicsPositionPage"
import SelectPositionPage from "./PositionPage/SelectPositionPage"
import GraphPosition from "./GraphPositionPage/GraphPositionPage"
import AdminSignin from "./admin/AdminSignin/AdminSignin"
import AdminSignup from "./admin/AdminSignup/AdminSignup"
import ConclusionPage from "./admin/Conclusion/ConclusionPage"
import ProtectedAdminRoute from "./core/helpers/routers/ProtectedAdminRoute"
import AdminUserDataPage from "./admin/GraphPage/AdminUserDataPage"
import AdminSuggestionPage from "./admin/Suggestion/AdminSuggestionPage"
import AboutPage from "./AboutPage"
import { useEffect, useState } from "react"

function App() {
  const curLocation = useLocation();
  const renderNav = () => {
    if(curLocation.pathname != '/admin' && curLocation.pathname != '/admin-signup') {
      return <Nevbar/>
    }
  }

  return (
    <AuthProvider className="App">
      <div id="navbar">
        {renderNav()}
      </div>
      <Routes>
        <Route path="/" element={
            <HomePage />
        }/>
        <Route path="/about" element={
            <AboutPage />
        }/>
        <Route path="/typesweb" element={
          <ProtectedRoute> 
            <TypesWebPage />
          </ProtectedRoute>}/>
        <Route path="/graph" element={
          <ProtectedRoute> 
            <GraphPage />
          </ProtectedRoute>}/>
        <Route path="/suggestion" element={
        <ProtectedRoute>
          <SugPage />
        </ProtectedRoute>}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/select-graphics-position" element={<SelectGraphicsPositionPage /> }/>
        <Route path="/select-position" element={<SelectPositionPage /> }/>
        <Route path="/select-graphics-position/:id/:position" element={<SelectGraphicsPositionPage /> }/>
        <Route path="/graphposition" element={<GraphPosition /> }/>
        <Route path="/admin" element={<AdminSignin />}/>
        <Route path="/admin-signup" element={<AdminSignup />}/>
        <Route path="/conclusion" element={
          <ProtectedAdminRoute>
            <ConclusionPage />
          </ProtectedAdminRoute>}/>
        <Route path="/admin-userdata" element={
          <ProtectedAdminRoute>
            <AdminUserDataPage />
          </ProtectedAdminRoute>}/>
        <Route path="/admin-suggestion" element={
          <ProtectedAdminRoute>
            <AdminSuggestionPage />
          </ProtectedAdminRoute>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
