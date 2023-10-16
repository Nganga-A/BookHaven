import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    // Send loginData to the backend (Flask) for authentication
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (response.status === 200) {
      // Authentication successful, you can navigate to a new page or set a user session
      console.log('Authentication successful');
    } else {
      // Authentication failed, handle the error here
      console.log('Authentication failed');
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form container p-5 rounded bg-white'>
        <h1 className='text-center'>Login To Existing Account</h1>
        <Card bg="light" text="dark" className="mb-3">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  id="check"
                  className='custom-control custom-checkbox'
                />
              </Form.Group>
              <div>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
            <p className='text-end mt-2'>
              Forgot <a href='/forgot-password'>Password?</a>
              <Link to='/signup' className='ms-2'>
                Signup
              </Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
