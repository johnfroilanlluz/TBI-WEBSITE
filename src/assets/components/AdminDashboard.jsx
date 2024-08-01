import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import '../css/AdminDashboard.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = ({ onClose }) => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    }
  };

  const handleDisapprove = async (index) => {
    const application = applications[index];

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
    }
  };

  const handlePrint = async (index) => {
    const token = localStorage.getItem('token');
    const application = applications[index];

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
    <div className="admin-dashboard">
      <h2 className="centered-title">ADMIN DASHBOARD</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search applications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch} className="btn-search">Search</button>
      </div>
      <table className="applications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Members</th>
            <th>Idea</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index}>
              <td>{application.name}</td>
              <td>{application.industry}</td>
              <td>
                <span
                  className="member-count"
                  onClick={() => handleShowMembers(application.id)}
                >
                  {application.members.length}
                </span>
              </td>
              <td>{application.idea}</td>
              <td>{application.status}</td>
              <td>
                <button
                  className="btn-approve"
                  onClick={() => handleApprove(index)}
                >
                  Approve
                </button>
                <button
                  className="btn-disapprove"
                  onClick={() => handleDisapprove(index)}
                >
                  Disapprove
                </button>
                <button
                  className="btn-print"
                  onClick={() => handlePrint(index)}
                >
                  Print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contentLabel="Members List"
        className="modal"
        overlayClassName="overlay"
      >
        <h3>Members</h3>
        <ul>
          {selectedMembers.map((member, index) => (
            <li key={index}>{member.name} ({member.role})</li>
          ))}
        </ul>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
