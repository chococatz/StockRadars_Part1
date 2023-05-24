import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://stockradars.co/assignment/data.php ')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  var i=1;

  return (
    <div className='container-box'>
      <table className='table table-hover table-bordered table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Company Name</th>
            <th scope='col'>Company URL</th>
            <th scope='col'>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr>
              <td>{i++}</td>
              <td>{user.N_name ? (user.N_name)  : (<span className='no-data-color'>No Data</span>)}</td>
              <td>{user.N_COMPANY_E ? (user.N_COMPANY_E)  : (<span className='no-data-color'>No Data</span>)}</td>
              <td>{user.N_URL ? (user.N_URL)  : (<span className='no-data-color'>No Data</span>)}</td>
              <td>{user.marketcap ? (user.marketcap)  : (<span className='no-data-color'>No Data</span>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
