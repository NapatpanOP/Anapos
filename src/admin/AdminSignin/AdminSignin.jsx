import "./AdminSignin.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";

import { useAuthContext } from "../../core/contexts/AuthProvider";
import { SigninAPI } from "../../apis/admin/SigninAPI";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const AdminSignin = () => {
  const { AuthAction } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    console.log("Email:", email, "Password:", password);
  };

  const signin = async (admin) => {
    console.log(admin)
    admin.password = CryptoJS.AES.encrypt(admin.password, 'OKIOKI007').toString();
    const response = await SigninAPI.signin(admin)
    if (!response?.message) {
      AuthAction.onSetAdminSignin(response)
      navigate('/conclusion');
    } else {
      setErrorMessage(response.message)
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <h2>Admin Sign in</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <p className="text-error">{errorMessage}</p>
          <button onClick={() => signin({email: email, password: password})} type="submit" className="btn btn-primary btn-success">
            Sign in
          </button>
          <div class="signup-container">
            <Link to="/admin-signup">
              <button type="signup">Sign up</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminSignin;