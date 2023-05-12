import React, { useState } from 'react';
import './YoutubePage.css';
import logoyutube from "../assets/logoBrands/youtube.jpg"
import positionyoutube from "../assets/positionPage/PositionYoutube.jpg"
import PopupYoutube from '../components/PositionPopup/YoutubePage/PopupYoutube';

function YoutubePage() {

  return (
    <div>
      <img src={logoyutube} alt="logo-youtube" class="logo-youtube" />
    
      <div class="headtext">
        <p>VARIOUS POSITIONS</p>
      </div>

      <div class="bt-position">
        <PopupYoutube />
      </div>

      <img src={positionyoutube} alt="position-youtube" class="position-youtube" />
    </div>
  );
}

export default YoutubePage;