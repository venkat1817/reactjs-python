import React from 'react';
import JsonData from './data.json';

function JsonDataDisplay() {
  const DisplayData = JsonData.map(info => {
    return (
      <tr key={info.id}>
        <td>{info.sno}</td>
        <td>{info.Name}</td>
        <td>{info.course}</td>
        <td>{info.Age}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>sno</th>
            <th>Name</th>
            <th>course</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
