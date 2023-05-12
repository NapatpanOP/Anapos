import React, { useState } from 'react';
import "./ViuPage.css"
import logoviu from "../assets/logoBrands/viu.jpg"
import positionviu from "../assets/positionPage/PositionViu.jpg"
import PopupViu from '../components/PositionPopup/ViuPage/PopupViu';

function ViuPage() {
  return (
    <div>
      <img src={logoviu} alt="logo-viu" class="logo-viu" />

      <div class="headtext">
        <p>VARIOUS POSITIONS</p>
      </div>

      <div class="bt-position">
        <PopupViu />
      </div>

      <img src={positionviu} alt="position-viu" class="position-viu" />
    </div>
  );
}

export default ViuPage;