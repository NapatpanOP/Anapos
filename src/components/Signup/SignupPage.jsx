import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";
import { RegisterAPI } from "../../apis/auth/registerAPI";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [ageRange, setAgeRange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password && sex && ageRange) {
      console.log({ username, email, password, sex, ageRange });
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

  const register = (user) => {
    user['brands_like'] = []
    user['ad_template'] = []
    user.password = CryptoJS.AES.encrypt(user.password, 'OKIOKI007').toString();
    RegisterAPI.register(user).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="register-container">
      <div className="register-form-container">
        <form onSubmit={handleSubmit}>
          <h2>SIGN UP FOR ACCESS</h2>
          <div className="form-group">
            <label htmlFor="username">USER*</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="sex">SEX*</label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">-- Please select --</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ageRange">AGE RANGE*</label>
            <select
              id="ageRange"
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
            >
              <option value="">-- Please select --</option>
              <option value=">18">&gt;18</option>
              <option value="18-25">18 - 25</option>
              <option value="26-35">26 - 35</option>
              <option value="36-45">36 - 45</option>
              <option value="56-65">56 - 65</option>
              <option value="<65">&lt;65</option>
            </select>
            <div className="Signup-submit">
              <button onClick={() => register({ username: username, password: password, email: email, sex: sex, age_range: ageRange })} type="submit" className="btn btn-primary Signup-submit">
                CONFIRM
              </button>
            </div>
            <div class="login-containersignup">
              <Link to="../Login">
                <button type="login">Log in</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPage;
