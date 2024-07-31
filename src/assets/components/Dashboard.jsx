import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';

const Dashboard = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch('https://tbic.azurewebsites.net/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Ensure the token is sent correctly
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Failed to fetch account:', errorData.error);
          setError('Failed to fetch account');
          return;
        }

        const data = await response.json();
        setAccount(data);
      } catch (error) {
        console.error('Error fetching account:', error);
        setError('Error fetching account');
      }
    };

    fetchAccount();
  }, [token]);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        account && (
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{account.name}</td>
                <td>{account.status}</td>
                <td>{account.remarks}</td>
              </tr>
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default Dashboard;
