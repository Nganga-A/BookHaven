import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    // Send formData to the backend (Flask) for registration
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
      // Registration successful, you can navigate to a new page or handle it as needed
      console.log('Registration successful');
    } else {
      // Registration failed, handle the error here
      console.log('Registration failed');
    }
  };

  return (
    <div className='Signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form container p-5 rounded bg-white'>
        <h1 className='text-center'>Sign Up to Create an Account</h1>
        <Card bg="light" text="dark" className="mb-3">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col className="mb-2">
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <div className='d-grid mt-2'>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
            <p className='text-end mt-2'>
              Already Registered? <Link to='/'>Login in</Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
