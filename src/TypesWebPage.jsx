import React, { useState, useEffect, Fragment } from 'react';
import './TypesWebPage.css';
import BrandsCard from './components/BrandsCard/BrandsCard';
import Footer from './components/Footer/Footer';
import picture1 from "./assets/picture/pt-8.jpg"

const TypesWeb = () => {
  return (
    <div>
      <div class="full-size-type">
        <div class="head-type">
          <img class="picture-head-type" src={picture1} alt="pt-8" />
          <div class="text-head-type">
            <h1>ประเภทเว็บไซต์</h1>
          </div>
        </div>
      </div>

      <Fragment>
        <BrandsCard filter={true}/>
      </Fragment>

      <Footer/>
    </div>
  )
}

export default TypesWeb;
