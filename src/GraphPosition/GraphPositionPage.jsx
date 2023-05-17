import React, { useState } from "react";
import "./GraphPositionPage.css";
import youtubePosition from '../assets/positionPage/PositionYoutube.jpg'
import BarPositionYoutube from '../components/BarChart/GraphYoutube/BarPositionYoutube'
import BarPositionViu from "../components/BarChart/GraphViu/BarPositionViu";
import BarPositionTrueID from "../components/BarChart/GraphTrueID/BarPositionTrueID";
import BarPositionJib from "../components/BarChart/GraphJib/BarPositionJib";

function GraphPosition() {

  const [pageGraph, setGraph] = useState("");

  return (
    <div>
      <p className="text-head">Youtube</p>
      <div class="bt-graph">
        <button type="button" className="btn btn-outline-dark ">
          POSITION
        </button>
        <button type="button" className="btn btn-outline-dark">
          BANNER
        </button>
      </div>

      <div className="graphPage">
        <select
          id="pageGraph"
          value={pageGraph}
          onChange={(e) => setGraph(e.target.value)}
        >
          <option value="position1">POSITION1</option>
          <option value="position2">POSITION2</option>
          <option value="position3">POSITION3</option>
          <option value="position4">POSITION4</option>
          <option value="position5">POSITION5</option>
        </select>
      </div>
      
      <div class="box-content">
        <img src={youtubePosition} alt="position-photo" className="position-photo"/>
        {/* <BarPositionYoutube/> */}
        {/* <BarPositionViu/> */}
        {/* <BarPositionTrueID/> */}
        <BarPositionJib/>
      </div>

    </div>
  )
}

export default GraphPosition
