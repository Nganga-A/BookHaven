import React, { useState } from 'react';
import { Card, Form, Button, CloseButton, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the backend (Flask) for registration
    // You can use Axios or fetch to make an API call to your Flask server.
  };

  return (
    <form>
    <div className='Signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form container p-5 rounded bg-white'>
        <h1 className='text-center'>Sign Up to Create an account </h1>
        <div/>  
        <div/>
          <Card bg="light" text="dark" className="mb-3">
            <div/>
            <div/>
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
                <p className='text-end mt-2'>
                  Already Registered<Link to='/' className='ms-2'>Login in</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
      </div>
    </div>
    </form>
  );
}

export default Signup;