import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ResetPassword() {
  const [resetData, setResetData] = useState({
    username: '',
    resetToken: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send resetData to the backend (Flask) for resetting the password using Axios
      const response = await axios.post('/reset-password', resetData);

      if (response.status === 200) {
        console.log('Password reset successfully');
      } else {
        console.error('Password reset failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='reset-password template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form container p-5 rounded bg-white'>
        <h1 className='text-center'>Reset Password</h1>
        <Card bg="light" text="dark" className="mb-3">
          <Card.Body>
            <div className='mb-2'>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={resetData.username}
                  onChange={handleChange}
                  required
                />
              </Form>
            </div>
            <div className='mb-2'>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  name="resetToken"
                  placeholder="Enter Reset Token"
                  value={resetData.resetToken}
                  onChange={handleChange}
                  required
                />
              </Form>
            </div>
            <div className='mb-2'>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="password"
                  name="newPassword"
                  placeholder="Enter New Password"
                  value={resetData.newPassword}
                  onChange={handleChange}
                  required
                />
              </Form>
            </div>
            <div className='d-grid'>
              <Button type="submit">Reset Password</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ResetPassword;
