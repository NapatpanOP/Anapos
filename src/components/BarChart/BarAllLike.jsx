import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarAllLike({data}) {
  const [userData, setData] = useState({
    labels: data.map((item) => item.title),
    datasets: [{
      label: "OVERVIEW",
      data: data.map((item) => item?.like?.length),
      backgroundColor: [
        '#00ADB5',
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
        '#61A48D',
        '#9EA1D4',
        '#FF5858',
        '#7371D9',
        '#D071D9',
      ],
    }]
  }) 

  useEffect(() => {
    setData({
      labels: data.map((item) => item.title),
      datasets: [{
        label: "OVERVIEW",
        data: data.map((item) => item?.like?.length),
        backgroundColor: [
          '#00ADB5',
          '#FD8A8A',
          '#F1F7B5',
          '#88D7B5',
          '#61A48D',
          '#9EA1D4',
          '#FF5858',
          '#7371D9',
          '#D071D9',
        ],
      }]
    })
  },  [data])

  return (
    <div className="full-box">
      <div className="bar-chart">
        <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarAllLike
