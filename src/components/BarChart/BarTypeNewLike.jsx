import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { data } from '../data.json'
import BarChart from './BarChart';
import './BarChart.css'

function BarTypeNewLike({data}) {
  const filterredNew = data.filter((item) => {
    return item.type === "New";
});
  const [userData, setData] = useState({
    labels: filterredNew.map((item) => item.title),
    datasets: [{
      label: "News Website",
      data: null,
      backgroundColor: [
        '#F1F7B5',
        '#FD8A8A',
        '#88D7B5',
      ],
    }]
  })

  useEffect(() => {
    setData({
      labels: filterredNew.map((item) => item.title),
      datasets: [{
        label: "News Website",
        data: filterredNew.map((item) => {
          var positionAllCounts = 0
          item.adsPositions.forEach((position) => {
            positionAllCounts += position.selected_counts
          })
          return positionAllCounts
        }),
        backgroundColor: [
          '#F1F7B5',
          '#FD8A8A',
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

export default BarTypeNewLike
