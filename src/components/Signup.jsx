import React, { useState } from "react";
import s1 from "../assets/form (1) copy.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log("Form submitted", data);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-image">
            <img src={s1} alt="Signup" />
          </div>
        </div>
        <div className="col-md-6">
          <h4>Register to continue</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Full Name</label>
              <input
                name="name"
                value={credentials.name}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                name="email"
                value={credentials.email}
                onChange={handleChange}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  name="cpassword"
                  value={credentials.cpassword}
                  onChange={handleChange}
                  type={showCPassword ? "text" : "password"}
                  className="form-control"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowCPassword(!showCPassword)}
                >
                  <FontAwesomeIcon icon={showCPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <p>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
