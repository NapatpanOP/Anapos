import React from "react";
// import { data } from '../../components/data.json';
import { useEffect, useState } from "react";
import { BrandAPI } from "../../apis/brandAPI";
import "./ConclusionPage.css";

const ConclusionPage = () => {

  const [allBrand, setAllBrand] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await BrandAPI.getAll();
      setAllBrand(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div class="box-table">
        <p>ALL Brand</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Like</th>
            </tr>
          </thead>
          <tbody>
            {allBrand.map((brand, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{brand.title}</td>
                <td>{brand.type}</td>
                <td>{brand.like.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div class="box-table-allWebsite">
        <p>Youtube</p>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Type</th>
              <th>Like</th>
            </tr>
          </thead>
          <tbody>
            {allBrand.map((brand, index) => (
              <tr key={index}>
                <td>Position {brand.adsPositions.join(", ")}</td>
                <td>{brand.title}</td>
                <td>{brand.type}</td>
                <td>{brand.like.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ConclusionPage;
