import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypeBusinessLike({data}) {
  const filterredBusiness = data.filter((item) => {
    return item.type === "Business";
});
  const [userData, setData] = useState({
    labels: filterredBusiness.map((item) => item.title),
    datasets: [{
      label: "Busness Website",
      data: null,
      backgroundColor: [
        '#FD8A8A',
        '#F1F7B5',
        '#88D7B5',
      ],
    }]
  })

  useEffect(() => {
    setData({
      labels: filterredBusiness.map((item) => item.title),
      datasets: [{
        label: "Busness Website",
        data: filterredBusiness.map((item) => {
          var positionAllCounts = 0
          item.adsPositions.forEach((position) => {
            positionAllCounts += position.selected_counts
          })
          return positionAllCounts
        }),
        backgroundColor: [
          '#FD8A8A',
          '#F1F7B5',
          '#88D7B5',
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

export default BarTypeBusinessLike
