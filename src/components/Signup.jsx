import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import s1 from "../assets/form (1) copy.jpg";

const Signup = () => {
  // State for storing user inputs
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", credentials);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6">
          <img src={s1} alt="Signup" className="img-fluid" />
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <h4>Register to continue</h4>
          <form onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="mb-3">
              <label className="form-label">Your Full Name</label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <div className="input-group">
                <input
                  type={showCPassword ? "text" : "password"}
                  name="cpassword"
                  value={credentials.cpassword}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowCPassword((prev) => !prev)}
                >
                  {showCPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-3">
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
