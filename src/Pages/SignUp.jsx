// Pages/SignUp.jsx

import React, { useState } from "react";
import "../Styles/SignUp.css";
import Hero from "../Components/Hero";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    education: "",
    role: "", // This will be either 'Mentor' or 'Mentee'
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

    // Validation rules for required fields
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.education) errors.education = "Please select your education";
    if (!formData.role)
      errors.role = "Please select whether you are a mentor or a mentee";

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
          <h2>Thank you for signing up, {formData.firstName}!</h2>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>

            {/* First Name Field */}
            <div className="form-group">
              <label htmlFor="firstName"></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error" : ""}
                placeholder="Please enter first name"
              />
              {errors.firstName && (
                <small className="error-message">{errors.firstName}</small>
              )}
            </div>

            {/* Last Name Field */}
            <div className="form-group">
              <label htmlFor="lastName"></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error" : ""}
                placeholder="Please enter last name"
              />
              {errors.lastName && (
                <small className="error-message">{errors.lastName}</small>
              )}
            </div>

            {/* Job Title Field (Optional) */}
            <div className="form-group">
              <label htmlFor="jobTitle"></label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Please enter job title (optional)"
              />
            </div>

            {/* Education Dropdown */}
            <div className="form-group">
              <label htmlFor="education"></label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={errors.education ? "error" : ""}
              >
                <option value="">Select your education category</option>
                <option value="Art">Art</option>
                <option value="Science">Science</option>
                <option value="Math">Math</option>
                <option value="Engineering">Engineering</option>
                <option value="Literature">Literature</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
                <option value="Humanities">Humanities</option>
              </select>
              {errors.education && (
                <small className="error-message">{errors.education}</small>
              )}
            </div>

            {/* Mentor/Mentee Buttons */}
            <div className="form-group">
              <label>Role:</label>
              <div className="role-buttons">
                <button
                  type="button"
                  className={formData.role === "Mentor" ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, role: "Mentor" })}
                >
                  Mentor
                </button>
                <button
                  type="button"
                  className={formData.role === "Mentee" ? "selected" : ""}
                  onClick={() => setFormData({ ...formData, role: "Mentee" })}
                >
                  Mentee
                </button>
              </div>
              {errors.role && (
                <small className="error-message">{errors.role}</small>
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
