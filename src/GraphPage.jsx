import React, { useEffect, useState } from "react";
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
import { BrandAPI } from "./apis/brandAPI";
import { UserAPI } from "./apis/userAPI";
import { data } from'./components/data.json'
import { Link } from 'react-router-dom';
import { Container } from "@material-ui/core";

function PageGraph() {
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([])
  const [brands, setBrands] = useState([])
  if (!token) {
    navigate("/login");
  }

  const [viewGraph, setGraph] = useState("");

  useEffect(() => {
    const setup = () => {
      BrandAPI.getAll().then((res) => {
        console.log(res)
        setBrands(res)
        UserAPI.getAll().then((resUser) => {
          setAllUser(resUser)
        })
      })
    }

    setup()
  }, [])

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

    {/* Specific */}
      <div class="card-graph">
        <div class="card-grid">
          {data.map((item) => (
            <div class="card-container-graph">
              <Link to={`/graphposition`} className="card">
                <div className="product-card">
                  <img src={item.image} alt={item.name} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>


      {/* กราฟ Overview */}
      <BarAllLike data={brands}/>

      <BarTypePortalLike  data={brands}/>

      <BarTypeNewLike data={brands} />

      <BarTypeBusinessLike data={brands}/>

      <BarMaleLike data={brands} allUser={allUser} />

      <BarFemaleLike data={brands} allUser={allUser}/>

      <BarOtherLike data={brands} allUser={allUser}/>
    </div>
  );
}

export default PageGraph;
