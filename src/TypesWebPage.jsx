import React, { useState, useEffect, Fragment } from 'react';
import './TypesWebPage.css';
import BrandsCard from './components/BrandsCard/BrandsCard';

const TypesWeb = () => {
  return (
    <div>
      <p className="text-head">Types Of Websites</p>

      <Fragment>
        <BrandsCard filter={true}/>
      </Fragment>
    </div>
  )
}

export default TypesWeb;
