import React, { useState } from 'react';
import "./SanookPage.css"
import logosanook from "../assets/logoBrands/sanook.jpg"
import positionsanook from "../assets/positionPage/PositionSanook.jpg"
import PopupSanook from '../components/PositionPopup/Sanook/PopupSanook';

function SanookPage() {
  return (
    <div>
      <img src={logosanook} alt="logo-sanook" class="logo-sanook" />

      <div class="headtext">
        <p>VARIOUS POSITIONS</p>
      </div>

      <div class="bt-position">
        <PopupSanook />
      </div>

      <img src={positionsanook} alt="position-sanook" class="position-sanook" />
    </div>
  );
}

export default SanookPage;