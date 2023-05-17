import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypeBusinessLike() {
  const [userData, setData] = useState({
    labels: ['Banana', 'Jib', 'Advich'],
    datasets: [{
      label: "Busness Website",
      data: data.map((data) => data.like_business),
      backgroundColor: [
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
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

export default BarTypeBusinessLike
