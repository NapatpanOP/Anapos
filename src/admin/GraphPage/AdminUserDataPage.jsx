import React from "react";
// import { data } from '../../components/data.json';
import { useEffect, useState } from "react";
import { UserAPI } from "../../apis/userAPI";
import "../Conclusion/ConclusionPage.css";

const AdminUserDataPage = () => {

  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await UserAPI.getAll();
      setAllUser(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div class="box-table">
        <p>User</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Sex</th>
              <th>Age_range</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.sex}</td>
                <td>{user.age_range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminUserDataPage;
