import React, { useState } from "react";
import "./GraphPosition.css";
import { useAuthContext } from "./core/contexts/AuthProvider";
import { useNavigate } from "react-router";

function GraphPosition() {
  const { token } = useAuthContext();
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }

  const [viewGraph, setGraph] = useState("");

  return (
    <div>
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
          id="viewGraph"
          value={positionGraph}
          onChange={(e) => setGraph(e.target.value)}
        >
          <option value="position1">POSITION1</option>
          <option value="position2">POSITION2</option>
          <option value="position3">POSITION3</option>
          <option value="position4">POSITION4</option>
          <option value="position5">POSITION5</option>
        </select>
      </div>
      
    </div>
  )
}

export default GraphPosition
