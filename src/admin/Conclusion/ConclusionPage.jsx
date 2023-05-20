import React from 'react';
import { data } from '../../components/data.json';
import './ConclusionPage.css';

const ConclusionPage = () => {
    return (
        <div class="box-table">
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>All Like</th>
                    <th>Male Like</th>
                    <th>Female Like</th>
                    <th>Other Like</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.like_all}</td>
                    <td>{item.like_male}</td>
                    <td>{item.like_female}</td>
                    <td>{item.like_other}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default ConclusionPage