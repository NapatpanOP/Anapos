import React, { useState } from "react";
import "./GraphPage.css";
import { useAuthContext } from "./core/contexts/AuthProvider";
import { useNavigate } from "react-router";
import BarAllLike from "./components/BarChart/BarAllLike";
import BarMaleLike from "./components/BarChart/BarMaleLike";
import BarFemaleLike from "./components/BarChart/BarFemaleLike";
import BarOtherLike from "./components/BarChart/BarOtherLike";
import BarTypePortalLike from "./components/BarChart/BarTypePortalLike";
import BarTypeNewLike from "./components/BarChart/BarTypeNewLike";
import BarTypeBusinessLike from "./components/BarChart/BarTypeBusinessLike";

function PageGraph() {
  const { token } = useAuthContext();
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }

  const [viewGraph, setGraph] = useState("");

  return (
    <div>
      <p className="text-head">Graph</p>
      <div class="bt-graph">
        <button type="button" className="btn btn-outline-dark ">
          SPECIFIC
        </button>
        <button type="button" className="btn btn-outline-dark">
          OVERVIEW
        </button>
      </div>

      <div className="graphPage">
        <select
          id="viewGraph"
          value={viewGraph}
          onChange={(e) => setGraph(e.target.value)}
        >
          <option value="overview">OVERVIEW</option>
          <option value="type">TYPE</option>
          <option value="sex">SEX</option>
        </select>
      </div>

      <BarAllLike />

      <BarTypePortalLike />

      <BarTypeNewLike />

      <BarTypeBusinessLike />

      <BarMaleLike />

      <BarFemaleLike />

      <BarOtherLike />
    </div>
  );
}

export default PageGraph;
