import React, { useState } from "react";
import "./SignupHomepage.css";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { RegisterAPI } from "../../apis/auth/registerAPI";
import { useAuthContext } from "../../core/contexts/AuthProvider";

function SignupHomePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [ageRange, setAgeRange] = useState("");

  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const { AuthAction } = useAuthContext();
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password && sex && ageRange && isChecked) {
      register({
        username: username,
        password: password,
        email: email,
        sex: sex,
        age_range: ageRange,
      });
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
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
    user["brands_like"] = [];
    user["ad_template"] = [];
    user.password = CryptoJS.AES.encrypt(user.password, "OKIOKI007").toString();
    RegisterAPI.register(user)
      .then((response) => {
        if (response?.message) {
          setErrorMessage(response.message);
        } else {
          AuthAction.onSetUserSignin(response);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-container-home">
      <div className="register-form-home">
        <div className="register-box-home">
          <div className="form-group-home">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ชื่อผู้ใช้"
            />
          </div>
          <div className="form-group-home">
            <label htmlFor="email">อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={validateEmail(email) ? "" : "invalid"}
              placeholder="อีเมล"
            />
          </div>
          <div className="form-group-home">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={validatePassword(password) ? "" : "invalid"}
              placeholder="รหัสผ่าน"
            />
          </div>

          <div className="select-group-home">
            <div className="form-group-home">
              <label htmlFor="sex">เพศ</label>
              <select
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">-- เพศ --</option>
                <option value="MALE">ชาย</option>
                <option value="FEMALE">หญิง</option>
                <option value="OTHER">อื่นๆ</option>
              </select>
            </div>
            <div className="form-group-home">
              <label htmlFor="ageRange">อายุ</label>
              <select
                id="age_range"
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
              >
                <option value="">-- อายุ --</option>
                <option value=">18">&gt;18</option>
                <option value="18-25">18 - 25</option>
                <option value="26-35">26 - 35</option>
                <option value="36-45">36 - 45</option>
                <option value="46-55">46 - 55</option>
                <option value="<55">&lt;55</option>
              </select>
            </div>
          </div>

          <p className="text-error">{errorMessage}</p>
          <input
            type="checkbox"
            id="arrow-confirm"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="confirm" class="ck-confirm-home">
            ยินยอมให้เก็บข้อมูลการเข้าใช้เว็บไซต์
          </label>
          <div className="Signup-submit-home">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary Signup-submit btn-success"
              id="bt-signup-home"
            >
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupHomePage;
