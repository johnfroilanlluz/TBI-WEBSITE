import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader'; // Assuming you have a Loader component for loading states

const Dashboard = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAccount = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, [token]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-8">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md space-y-4 overflow-y-auto max-h-full">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => window.history.back()}
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
        {loading && <Loader />}
        {error ? (
          <div className="error text-red-500 text-center">{error}</div>
        ) : (
          account && (
            <div className="overflow-x-auto w-full">
              <table className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">{account.name}</td>
                    <td className="border px-4 py-2">{account.status}</td>
                    <td className="border px-4 py-2">{account.remarks}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
