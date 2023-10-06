import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [username, setUsername] = useState(''); // State variable for the username
  const [message, setMessage] = useState(''); // To display success or error messages

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend to initiate password reset using the username
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }), // Send the username
      });

      if (response.ok) {
        // Provide feedback to the user about the password reset initiation
        setMessage('Password reset initiated for the provided username.');
      } else {
        // Handle errors (e.g., invalid username or server errors)
        setMessage('Error initiating password reset. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form container p-5 rounded bg-white'>
        <h1 className='text-center'>Forgot Password</h1>
        <Card bg="light" text="dark" className="mb-3">
          <Card.Body>
            {message && <div className="alert">{message}</div>} {/* Display success or error message */}
            <div className='mb-2'>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </Form>
            </div>
            <div className='d-grid'>
              <Button type="submit">Reset Password</Button>
            </div>
            <p className='text-end mt-2'>
              Remember your password? <Link to='/'>Login</Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ForgotPassword;
