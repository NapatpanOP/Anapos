import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../../apis/auth/loginAPI";
import CryptoJS from "crypto-js";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const ciphertext = CryptoJS.AES.encrypt("1234", 'OKIOKI007').toString();
  // const login = LoginAPI.login({email: "mail@mail.com", password:ciphertext})
  // console.log(login)

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

  const login = async (user) => {
    user.password = CryptoJS.AES.encrypt(user.password, 'OKIOKI007').toString();
    const response = await LoginAPI.login(user)
    console.log(response)
    if(!response?.name) {
      localStorage.setItem("user", JSON.stringify(response))
       navigate("/")
    }
    
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
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
          <button onClick={() => login({email: email, password: password})} type="submit" className="btn btn-primary">
            Log in
          </button>
          <div class="signup-container">
            <Link to="../Signup">
              <button type="signup">Sign up</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;