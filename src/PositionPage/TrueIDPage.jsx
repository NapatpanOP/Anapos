import React, { useState } from 'react';
import "./TrueIDPage.css"
import logotrueid from "../assets/logoBrands/trueID.jpg"
import positiontrueid from "../assets/positionPage/PositionTrueID.jpg"
import PopupTrueID from '../components/PositionPopup/TrueID/PopupTrueID';

function TrueIDPage() {
  return (
    <div>
      <img src={logotrueid} alt="logo-trueid" class="logo-trueid" />

      <div class="headtext">
        <p>VARIOUS POSITIONS</p>
      </div>

      <div class="bt-position">
        <PopupTrueID />
      </div>

      <img src={positiontrueid} alt="position-trueid" class="position-trueid" />
    </div>
  );
}

export default TrueIDPage;