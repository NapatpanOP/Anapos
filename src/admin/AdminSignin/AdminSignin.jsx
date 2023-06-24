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
  const { AuthAction, loadingAction } = useAuthContext();
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
  };

  const signin = async (admin) => {
    loadingAction.onLoading(true)
    admin.password = CryptoJS.AES.encrypt(admin.password, 'OKIOKI007').toString();
    const response = await SigninAPI.signin(admin)
    loadingAction.onLoading(false)
    if (!response?.message) {
      AuthAction.onSetAdminSignin(response)
      navigate('/conclusion');
    } else {
      setErrorMessage(response.message)
    }
  };

  return (
    <div className="login-container">
      <div>
        <div className="login-form">
          <h2>ลงชื่อเข้าใช้สำหรับแอดมิน</h2>
          <div className="form-group">
            <label htmlFor="email">อีเมล*</label>
            <input
              type="email"
              id="email"
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">รหัสผ่าน*</label>
            <input
              type="password"
              id="password"
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <p className="text-error">{errorMessage}</p>
          <button onClick={() => signin({email: email, password: password})} type="submit" className="btn btn-primary btn-success" id="admin-signin">
            ลงชื่อเข้าใช้
          </button>
          <div class="signup-container">
            <Link to="/admin-signup">
              <button type="signup">ลงทะเบียน</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;