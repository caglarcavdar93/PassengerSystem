import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/gozen-holding-logo.svg";
function Login() {
    let navigate = useNavigate();
  return (
    <Container fluid>
      <div className="loginCard">
        <div className="parentContainer">
          <div className="logoContainer">
            <img
              src={logo}
              alt="company logo"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
          <div className="loginContainer">
            <h2 style={{ marginBottom: "5%" }}>Passenger System</h2>
            <Form style={{ width: "90%" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={() => {navigate('/passenger')}}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
