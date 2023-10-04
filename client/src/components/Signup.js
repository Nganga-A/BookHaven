import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Card, Form, Button, CloseButton, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showForm, setShowForm] = useState(false);

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
    <Container>
      <h2>Sign Up</h2>
      {!showForm ? (
        <Button onClick={() => setShowForm(true)}>Sign Up</Button>
      ) : (
        <Card bg="light" text="dark" className="mb-3">
          <Card.Header>
            <CloseButton
              onClick={() => setShowForm(false)}
              aria-label="Close"
              variant="dark"
            />
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col className="mb-3" md={4}>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Col>
                <Col className="mb-3" md={4}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Col>
                <Col className="mb-3" md={4}>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Signup;
