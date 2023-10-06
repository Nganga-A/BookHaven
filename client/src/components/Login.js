import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send loginData to the backend (Flask) for authentication
    // You can use Axios or fetch to make an API call to your Flask server.
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form container p-5 rounded bg-white'>
      <h1 className='text-center'>Login To Existing Account</h1>
      <Card bg="light" text="dark" className="mb-3"> {/* Wrap content in Card */}
          <div/>
          <div/>
          
          <Card.Body>
            <div className='mb-2'>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={loginData.email}
                  onChange={handleChange}
                />
              </Form>
            </div>
            <div className='mb-2'>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={loginData.password}
                  onChange={handleChange}
                />
              </Form>
            </div>
            <div className='mb-2'>
              <input type='checkbox' className='custom-control custom-checkbox' id='check' />
              <label htmlFor='check' className='custom-input-label ms-2'> Remember me</label>
            </div>
            <div className='d-grid'>
              <Button type="submit">Login</Button>
            </div>
            <p className='text-end mt-2'>
              Forgot <a href='/forgot-password'>Password?</a>
              <Link to='/Signup' className='ms-2'>Signup</Link>
            </p>
          </Card.Body>
        </Card> 
         </div>
    </div>
  );
}

export default Login;