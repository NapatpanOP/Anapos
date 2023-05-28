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
        {allBrand?.map((brand, brand_index) => (
          <div key={brand_index}>
            <p>{brand?.title}</p>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Banner 1</th>
                  <th>Banner 2</th>
                  <th>Banner 3</th>
                </tr>
              </thead>
              <tbody>
                {brand?.adsPositions?.map((position, pos_index) => (
                  <tr key={pos_index}>
                    <td>Position {pos_index + 1}</td>
                    {position?.images_urls?.map((banner, banner_index) => (
                      <td key={banner_index}>{banner.selected_counts}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ConclusionPage;
