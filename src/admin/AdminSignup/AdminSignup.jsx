import React, { useState } from "react";
import "./AdminSignup.css";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { RegisterAPI } from "../../apis/auth/registerAPI";
import { SignupAPI } from "../../apis/admin/SignupAPI";
import { useAuthContext } from "../../core/contexts/AuthProvider";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { AuthAction, loadingAction } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
    //   console.log({ username, email, password, sex, ageRange });
      // ส่งข้อมูลไปยัง API หรือทำการส่งไปบันทึกในฐานข้อมูล
    } else {
      alert("Please fill in all fields");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^[a-zA-Z0-9]{6,}$/;
    return regex.test(password);
  };

  const signup = (admin) => {
    loadingAction.onLoading(true)
    admin.password = CryptoJS.AES.encrypt(admin.password, 'OKIOKI007').toString();
    SignupAPI.signup(admin).then((response) => {
      loadingAction.onLoading(false)
        if(response?.message) {
            setErrorMessage(response.message)
        } else {
            AuthAction.onSetAdminSignin(response)
            console.log(response)
            navigate('/conclusion')
        }
        
    })
  }

  return (
    <div className="register-container">
      <div className="register-form-container">
        <div>
          <h2>SIGN UP FOR ACCESS</h2>
          <div className="form-group">
            <label htmlFor="email">EMAIL*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={validateEmail(email) ? "" : "invalid"}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={validatePassword(password) ? "" : "invalid"}
            />
          </div>
          <p className="text-error">{errorMessage}</p>
          <div className="form-group">
            
            <div className="Signup-submit">
              <button onClick={() => signup({ email: email, password: password})} type="submit" className="btn btn-primary Signup-submit btn-success">
                CONFIRM
              </button>
            </div>
            <div class="login-containersignup">
              <Link to="/admin">
                <button type="login">sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSignup;
