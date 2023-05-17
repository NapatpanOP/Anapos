import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarAllLike() {
  const [userData, setData] = useState({
    labels: data.map((data) => data.name),
    datasets: [{
      label: "OVERVIEW",
      data: data.map((data) => data.like_all),
      backgroundColor: [
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
        '#00ADB5',
        '#61A48D',
        '#9EA1D4',
        '#FF5858',
        '#7371D9',
        '#D071D9',
      ],
    }]
  }) 

  return (
    <div class="full-box">
      <div class="bar-chart">
        <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarAllLike
