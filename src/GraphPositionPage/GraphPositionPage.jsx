import React, { useEffect, useState } from "react";
import "./GraphPositionPage.css";
import BarChart from "../components/BarChart/BarChart";
import { useLocation } from "react-router";
import { baseImageUrl } from "../core/store/localVariable";

function GraphPosition() {

  const [pageGraph, setGraph] = useState(0);
  const [mode, setMode] = useState('position');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })
  const location = useLocation();
  const [brandData, setBrandData] = useState({});
  const renderFilter = () => {
    if (mode == 'graphic') {
      return <div className="graphPage">
        <select
          id="pageGraph"
          value={pageGraph}
          onChange={(e) => setGraph(parseInt(e.target.value))}
        >
          {brandData?.adsPositions?.map((_, index) => <option key={index} value={index}>POSITION {index + 1}</option>)}

        </select>
      </div>
    }
  }

  const renderrBoxContent = () => {
    if (mode == 'position') {
      return <div className="box-content">
        <img src={baseImageUrl+brandData?.full_image} alt="position-photo" className="position-photo" />

        <div className="full-box-graph">
          <div className="bar-chart">
            <BarChart chartData={chartData} />
          </div>
        </div>

      </div>
    } else {
      return <div className="box-content">
        <div className="left-contain">
          { brandData?.adsPositions[pageGraph]?.images_urls.map((image, index) => {
            return <img key={index} src={baseImageUrl+image.images_url} alt="position-photo" className="graphics-photo" />
          })}
        </div>
        <div className="full-box-graph">
          <div className="bar-chart">
            <BarChart chartData={{
              labels: brandData?.adsPositions[pageGraph]?.images_urls.map((_, index) => `BANNER ${index + 1}`),
              datasets: [{
                label: `POSITION ${pageGraph + 1}`,
                data: brandData?.adsPositions[pageGraph]?.images_urls.map((item) => item.selected_counts),
                backgroundColor: [
                  '#F1F7B5',
                  '#FD8A8A',
                  '#88D7B5',
                  '#00ADB5',
                  '#61A48D',
                  '#9EA1D4',
                  '#FF5858',
                  '#7371D9',
                  '#D071D9',
                ],
              }]
            }} />
          </div>
        </div>
      </div>
    }
  }

  useEffect(() => {
    if (location.state) {

      setBrandData(location.state.brand)
      setChartData({
        labels: location.state.brand?.adsPositions.map((_, index) => `POSITION ${index + 1}`),
        datasets: [{
          label: location.state.brand?.title,
          data: location.state.brand?.adsPositions.map((item) => item.selected_counts),
          backgroundColor: [
            '#FF5858',
            '#88D7B5',
            '#FD8A8A',
            '#F1F7B5',
            '#00ADB5',
            '#61A48D',
            '#9EA1D4',
            '#7371D9',
            '#D071D9',
          ],
        }]
      })
    }
  }, [brandData])

  const textDescription = () => {
    if (mode ==  'position') {
      return <div>
        <p className='text-description'>Shows the number of clicks in different locations of 
        the website and displays the data in graphs.</p>
      </div>
    }
    else {
      return <div>
        <p className='text-description'>Displays design selection information for each position. 
        And the data is displayed in graph form.</p>
      </div>
    }
  }

  return (
    <div>
      <img src={baseImageUrl+brandData?.logo_brand ?? ""} alt="logo-banner" className="main-logo" />
      
      {textDescription()}

      <div className="bt-graph">
        <button type="button" onClick={() => setMode('position')} className={`btn ${mode == 'position' ? 'btn-dark' : 'btn-outline-dark'}`}>
          POSITION
        </button>
        <button type="button" onClick={() => setMode('graphic')} className={`btn ${mode == 'graphic' ? 'btn-dark' : 'btn-outline-dark'}`}>
          BANNER
        </button>
      </div>

      {renderFilter()}

      {renderrBoxContent()}

    </div>
  )
}

export default GraphPosition
