import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { sanook } from '../../dataSanook.json'
import BarChart from '../BarChart';
import '../GraphYoutube/BarChartPage.css'

function BarPositionSanook() {
  const [Data, setData] = useState({
    labels: sanook.map((data) => data.name_position),
    datasets: [{
      label: "Sanook Position",
      data: sanook.map((data) => data.count_position),
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
        <BarChart chartData={Data}/>
      </div>
    </div>
  )
}

export default BarPositionSanook
