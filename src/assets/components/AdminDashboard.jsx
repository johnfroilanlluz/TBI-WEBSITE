import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Loader from './Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = ({ onClose }) => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingState, setLoadingState] = useState({}); // To track loading state of each button

  const fetchApplications = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://tbic.azurewebsites.net/adminDashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setApplications(data.applications);
      } else {
        toast.error('Failed to fetch applications');
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast.error('An error occurred while fetching applications');
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleSearch = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`https://tbic.azurewebsites.net/adminDashboard/search?search=${searchTerm}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setApplications(data.applications);
      } else {
        toast.error('Failed to search applications');
      }
    } catch (error) {
      console.error('Error searching applications:', error);
      toast.error('An error occurred while searching applications');
    }
  };

  const handleApprove = async (index) => {
    const application = applications[index];
    setLoadingState(prevState => ({ ...prevState, [`approve-${index}`]: true }));

    try {
      const response = await fetch('https://tbic.azurewebsites.net/approve', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name: application.name })
      });

      if (response.ok) {
        setApplications(applications.map(app =>
          app.name === application.name ? { ...app, status: 'Approved', remarks: 'Congratulations! Please check your email for instructions.' } : app
        ));
        toast.success('Application approved successfully');
      } else {
        toast.error('Failed to approve application');
      }
    } catch (error) {
      console.error('Error approving application:', error);
      toast.error('An error occurred while approving application');
    } finally {
      setLoadingState(prevState => ({ ...prevState, [`approve-${index}`]: false }));
    }
  };

  const handleDisapprove = async (index) => {
    const application = applications[index];
    setLoadingState(prevState => ({ ...prevState, [`disapprove-${index}`]: true }));

    try {
      const response = await fetch('https://tbic.azurewebsites.net/disapprove', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name: application.name })
      });

      if (response.ok) {
        setApplications(applications.map(app =>
          app.name === application.name ? { ...app, status: 'Disapproved' } : app
        ));
        toast.success('Application disapproved successfully');
      } else {
        toast.error('Failed to disapprove application');
      }
    } catch (error) {
      console.error('Error disapproving application:', error);
      toast.error('An error occurred while disapproving application');
    } finally {
      setLoadingState(prevState => ({ ...prevState, [`disapprove-${index}`]: false }));
    }
  };

  const handlePrint = async (index) => {
    const token = localStorage.getItem('token');
    const application = applications[index];
    setLoadingState(prevState => ({ ...prevState, [`print-${index}`]: true }));

    try {
      const response = await fetch(`https://tbic.azurewebsites.net/print?name=${application.name}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${application.name}-Application.docx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        toast.error('Failed to generate print');
      }
    } catch (error) {
      console.error('Error generating print:', error);
      toast.error('An error occurred while generating print');
    } finally {
      setLoadingState(prevState => ({ ...prevState, [`print-${index}`]: false }));
    }
  };

  const handleShowMembers = async (id) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`https://tbic.azurewebsites.net/showMember/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSelectedMembers(data.members);
        setIsModalOpen(true);
      } else {
        toast.error('Failed to fetch members');
      }
    } catch (error) {
      console.error('Error fetching members:', error);
      toast.error('An error occurred while fetching members');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-8">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md space-y-4 overflow-y-auto max-h-full">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">ADMIN DASHBOARD</h2>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleSearch} className="btn bg-blue-500 text-white rounded-lg px-4 py-2">
            Search
          </button>
        </div>
        {applications.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Industry</th>
                  <th className="px-4 py-2">Members</th>
                  <th className="px-4 py-2">Idea</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{application.name}</td>
                    <td className="border px-4 py-2">{application.industry}</td>
                    <td className="border px-4 py-2">
                      <span
                        className="cursor-pointer text-blue-500"
                        onClick={() => handleShowMembers(application.id)}
                      >
                        {application.members.length}
                      </span>
                    </td>
                    <td className="border px-4 py-2">{application.idea}</td>
                    <td className="border px-4 py-2">{application.status}</td>
                    <td className="border px-4 py-2 space-y-2">
                      <button
                        className="btn bg-green-500 text-white rounded-lg px-4 py-2 w-full"
                        onClick={() => handleApprove(index)}
                        disabled={loadingState[`approve-${index}`]}
                      >
                        {loadingState[`approve-${index}`] ? <Loader /> : 'Approve'}
                      </button>
                      <button
                        className="btn bg-red-500 text-white rounded-lg px-4 py-2 w-full"
                        onClick={() => handleDisapprove(index)}
                        disabled={loadingState[`disapprove-${index}`]}
                      >
                        {loadingState[`disapprove-${index}`] ? <Loader /> : 'Disapprove'}
                      </button>
                      <button
                        className="btn bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
                        onClick={() => handlePrint(index)}
                        disabled={loadingState[`print-${index}`]}
                      >
                        {loadingState[`print-${index}`] ? <Loader /> : 'Print'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-gray-500">No applications found</div>
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contentLabel="Members List"
          className="modal"
          overlayClassName="overlay"
        >
          <h3 className="text-xl font-bold mb-4">Members</h3>
          <ul className="list-disc pl-5">
            {selectedMembers.map((member, index) => (
              <li key={index}>{member.name} ({member.role})</li>
            ))}
          </ul>
          <button onClick={() => setIsModalOpen(false)} className="btn bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">
            Close
          </button>
        </Modal>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AdminDashboard;
