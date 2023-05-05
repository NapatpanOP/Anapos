import './LoginPage.css'
import { useState } from "react";

const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

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
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        <div class="signup-container">
          <button type="signup">Sign up</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default PageLogin;
