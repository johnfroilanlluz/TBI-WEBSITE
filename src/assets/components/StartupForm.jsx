import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader';

const StartupForm = ({ onClose }) => {
  const initialFormData = {
    name: '',
    industry: '',
    email: '',
    idea: '',
    members: [{ name: '', role: '' }, { name: '', role: '' }, { name: '', role: '' }]
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFinalized, setIsFinalized] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const members = [...formData.members];
    members[index][name] = value;
    setFormData({
      ...formData,
      members
    });
  };

  const addMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { name: '', role: '' }]
    });
  };

  const removeMember = (index) => {
    if (formData.members.length > 3) {
      const members = [...formData.members];
      members.splice(index, 1);
      setFormData({
        ...formData,
        members
      });
    } else {
      toast.error('At least 3 members are required.');
    }
  };

  const validateForm = () => {
    const errors = {};

    if (formData.name.length > 20) {
      errors.name = 'Startup name must be 20 characters or less.';
    }

    if (formData.email.length > 30) {
      errors.email = 'Email must be 30 characters or less.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (formData.idea.length > 800) {
      errors.idea = 'Idea must be 800 characters or less.';
    }

    if (formData.members.length < 3) {
      errors.members = 'At least 3 members are required.';
    }

    for (let i = 0; i < 3; i++) {
      if (!formData.members[i].name || !formData.members[i].role) {
        errors.members = 'The first three member slots must be filled out.';
        break;
      }
    }

    return errors;
  };

  const handleFinalize = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      toast.error(Object.values(errors).join('\n'));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://tbic.azurewebsites.net/saveApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsFinalized(true);
        toast.success('Application successful! Please click "Submit" to officially submit your application.');
      } else {
        toast.error('Application finalization failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error finalizing application:', error);
      toast.error('Application finalization failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://tbic.azurewebsites.net/emailApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: formData.email, name: formData.name })
      });

      if (response.ok) {
        toast.success('Please check your email for your username and password to track your application.');
        setTimeout(onClose, 2000); // Close modal after 2 seconds
      } else {
        toast.error('Application submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Application submission failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://tbic.azurewebsites.net/applicationClear', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: formData.name })
      });

      if (response.ok) {
        setFormData(initialFormData);
        setIsFinalized(false);
        toast.success('Application has been cleared.');
      } else {
        toast.error('Clearing application failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error clearing application:', error);
      toast.error('Clearing application failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-container">
      <h2 className="text-2xl font-bold mb-4">Startup Application Form</h2>
      {loading && <Loader />}
      <div className="form-group w-full">
        <label className="block text-left text-lg">Startup Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength="20"
          disabled={isFinalized}
        />
      </div>
      <div className="form-group w-full">
        <label className="block text-left text-lg">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength="30"
          disabled={isFinalized}
        />
      </div>
      <div className="form-group w-full">
        <label className="block text-left text-lg">Members and Roles:</label>
        {formData.members.map((member, index) => (
          <div key={index} className="member-group flex gap-4 mb-2">
            <input
              type="text"
              name="name"
              placeholder="Member Name"
              value={member.name}
              onChange={(e) => handleMemberChange(index, e)}
              className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isFinalized}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={member.role}
              onChange={(e) => handleMemberChange(index, e)}
              className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isFinalized}
            />
            {!isFinalized && (
              <button
                type="button"
                onClick={() => removeMember(index)}
                className="btn btn-remove bg-red-500 text-white rounded-lg px-4 py-2"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {!isFinalized && (
          <button type="button" onClick={addMember} className="btn btn-add bg-green-500 text-white rounded-lg px-4 py-2 mt-2">
            Add Member
          </button>
        )}
      </div>
      <div className="form-group w-full">
        <label className="block text-left text-lg">Industry:</label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isFinalized}
        />
      </div>
      <div className="form-group w-full">
        <label className="block text-left mb-2 text-lg">Brief Concept/Idea:</label>
        <textarea
          name="idea"
          value={formData.idea}
          onChange={handleChange}
          className="form-control w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength="800"
          disabled={isFinalized}
        />
      </div>
      <div className="form-group w-full flex justify-between">
        {!isFinalized ? (
          <button type="button" onClick={handleFinalize} className="btn btn-finalize bg-blue-500 text-white rounded-lg px-4 py-2">
            Finalize Application
          </button>
        ) : (
          <>
            <button type="button" onClick={handleSubmit} className="btn btn-submit bg-blue-500 text-white rounded-lg px-4 py-2">
              Submit
            </button>
            <button type="button" onClick={handleClear} className="btn btn-clear bg-red-500 text-white rounded-lg px-4 py-2">
              Clear
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </form>
  );
};

export default StartupForm;
