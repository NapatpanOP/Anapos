import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypePortalLike({data}) {
  const filterredPortal = data.filter((item) => {
      return item.type === "Portal";
  });
  const [userData, setData] = useState({
    labels: filterredPortal.map((item) => item.title),
    datasets: [{
      label: "Portal Website",
      data: data.map((item) => item.like.length),
      backgroundColor: [
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
      ],
    }]
  })

  useEffect(() => {
    setData({
      labels: filterredPortal.map((item) => item.title),
      datasets: [{
        label: "Portal Website",
        data: data.map((item) => item.like.length),
        backgroundColor: [
          '#FD8A8A',
          '#F1F7B5',
          '#88D7B5',
        ],
      }]
    })
  }, [data])

  return (
    <div class="full-box">
      <div class="bar-chart">
        <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarTypePortalLike
