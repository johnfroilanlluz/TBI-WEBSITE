import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';

const Login = ({ onClose, onLoginSuccess, onAdminLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://tbic.azurewebsites.net/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        toast.success('Login successful!', {
          onClose: () => {
            setLoading(false);
            onClose();
            if (data.redirectTo === 'adminDashboard') {
              onAdminLoginSuccess(); // Open Admin Dashboard modal
            } else {
              onLoginSuccess(); // Open regular Dashboard modal
            }
          }
        });
      } else {
        setLoading(false);
        toast.error('Login failed');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error logging in:', error);
      toast.error('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-8">
      {loading && <Loader />}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-md">
        <div className="p-6 sm:p-8">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 text-4xl"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="username" className="block text-left">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="block text-left">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
