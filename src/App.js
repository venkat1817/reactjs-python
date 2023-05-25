import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({ students: [] });

  useEffect(() => {
    fetch('/students')
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {data.students.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '5px' }}>Sno</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>Course</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.students.map((student, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid black', padding: '5px' }}>{student.Sno}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}>{student.Name}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}>{student.course}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}>{student.Age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
