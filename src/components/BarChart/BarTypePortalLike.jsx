import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypePortalLike() {
  const [userData, setData] = useState({
    labels: ['Youtube', 'Viu', 'TrueID'],
    datasets: [{
      label: "Portal Website",
      data: data.map((data) => data.like_portal),
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

export default BarTypePortalLike
