import React, { useState, useEffect, Fragment } from 'react';
import data from './components/BrandsCard/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './TypesWebPage.css';
import BrandsCard from './components/BrandsCard/BrandsCard';

const TypesWeb = () => {
  return (
    <Fragment>
      <BrandsCard filter={true}/>
    </Fragment>
  )
}

export default TypesWeb;
