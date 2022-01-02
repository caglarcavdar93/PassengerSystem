import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/gozen-holding-logo.svg";
import User from "../data/user";
import Cookies from "universal-cookie/es6";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  let navigate = useNavigate();
  let cookies = new Cookies();
  let userObj = User();
  let handleLogin = async () => {
    let result = await userObj.methods.login(email, password, (err) =>
      setErrorMessage(err)
    );
    if (result) {
      cookies.set("token", result.token, { path: "/" });
      navigate("/passenger");
    }
  };
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
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formErrorLabel">
                <Form.Label style={{ color: "red" }}>{errMessage}</Form.Label>
              </Form.Group>
              <Button variant="primary" onClick={handleLogin}>
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
