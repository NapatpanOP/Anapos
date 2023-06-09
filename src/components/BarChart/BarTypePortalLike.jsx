import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypePortalLike({data}) {
  const filterredPortal = data.filter((item) => {
      return item.type === "บันเทิง";
  });
  
  const [userData, setData] = useState({
    labels: filterredPortal.map((item) => item.title),
    datasets: [{
      label: "Portal Website",
      data: null,
      backgroundColor: [
        '#88D7B5',
        '#FD8A8A',
        '#F1F7B5',
      ],
    }]
  })

  useEffect(() => {
    setData({
      labels: filterredPortal.map((item) => item.title),
      datasets: [{
        label: "Portal Website",
        data:filterredPortal.map((item) => {
          var positionAllCounts = 0
          item.adsPositions.forEach((position) => {
            positionAllCounts += position.selected_counts
          })
          return positionAllCounts
        }),
        backgroundColor: [
          '#88D7B5',
          '#FD8A8A',
          '#F1F7B5',
        ],
      }]
    })
  }, [data])

  return (
    <div className="full-box">
      <div className="bar-chart">
          <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default BarTypePortalLike
