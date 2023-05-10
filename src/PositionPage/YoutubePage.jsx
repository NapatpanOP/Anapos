import React, { useState } from 'react';
import './YoutubePage.css';
import logoyutube from "../assets/logoBrands/youtube.jpg"

function YoutubePage() {
  return (
    <div>
        <div class="logo">
          <img src={logoyutube} alt="logo-youtube" class="logo-youtube" />
        </div>
    </div>
  );
}

export default YoutubePage;