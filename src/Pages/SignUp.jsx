// Pages/SignUp.jsx

import React, { useState } from "react";
import "../Styles/SignUp.css"; // Assuming you want to style it separately
import Hero from "../Components/Hero";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    // Basic validation rules
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Submit the form or make an API call here
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div>
      <Hero />
      <div className="signup-container">
        {submitted ? (
          <h2>Thank you for signing up, {formData.name}!</h2>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>

            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <small className="error-message">{errors.name}</small>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <small className="error-message">{errors.email}</small>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <small className="error-message">{errors.password}</small>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
