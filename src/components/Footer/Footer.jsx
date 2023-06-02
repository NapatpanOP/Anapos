import React from "react";
import "./Footer.css"
import logo from "../../assets/Logo.png"

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="logo" />
          <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
          <p>King Mongkut's Institute of Technology Ladkrabang</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
