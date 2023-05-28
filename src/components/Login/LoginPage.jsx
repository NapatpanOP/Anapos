import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../../apis/auth/loginAPI";
import CryptoJS from "crypto-js";

import { useAuthContext } from "../../core/contexts/AuthProvider";
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const LoginPage = () => {
  const { AuthAction } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState();

  // const ciphertext = CryptoJS.AES.encrypt("1234", 'OKIOKI007').toString();
  // const login = LoginAPI.login({email: "mail@mail.com", password:ciphertext})
  // console.log(login)

  const handleSubmit = async () => {
    // e.preventDefault();
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
    var errMessage = await AuthAction.onLogin({email: email, password: password})
    // console.log("test")
    setLoginError(errMessage)
  };

  return (
    <div class="login-container-box">
      <div class="login-form">
        <div class="login-box">
          <h2>Log in</h2>
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
          {loginError && <p className="error">{loginError}</p>}
          <button onClick={() => handleSubmit()} className="btn btn-primary btn-success" id="bt-login-page">
            Log in
          </button>
          <div class="signup-container">
            <Link to="../Signup">
              <button type="signup">Sign up</button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  );
};

export default LoginPage;