// Pages/SignUp.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import Hero from "../Components/Hero";


const SignUp = ({ setUser, setToken}) => {

  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    education: "",
    role: "", // This will be either 'Mentor' or 'Mentee'
    email: "",
    password_hash: "",
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
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.password_hash.trim())
      errors.password_hash = "Password is required";
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

      //create 
      const backEndObject = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        job_title: formData.jobTitle || null, 
        is_mentee: formData.role === "Mentee",
        is_mentor: formData.role === "Mentor",
        password_hash: formData.password_hash,
      }
// send a post request to the backend
      fetch(`${API}/users`, {
        method: "POST",
        body: JSON.stringify(backEndObject),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        if(res.user.id){
          const { user, token } = res
          setUser(user)
          setToken(token)

        // using value from education field to create first userCategory row for new user.(the update profile to add more)
          const userCategoryObject = {
            user_id: user.id,
            category_id: formData.education,
          }

          setFormData((prev) => ({
            firstName: "",
            lastName: "",
            jobTitle: "",
            education: "",
            role: "",
            email: "",
            password_hash: "",
          }))
          console.log(user.id)
          navigate(`/user-dashboard/${user.id}`)
        } else {
          console.log(res)
        }
      })
      .catch(err => {
        console.error("Error signing up:", err)
      })
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
            
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password_hash"
                value={formData.password_hash}
                onChange={handleChange}
                className={errors.password_hash ? "error" : ""}
                placeholder="Please enter your password"
              />
              {errors.password_hash && (
                <small className="error-message">{errors.password_hash}</small>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="Please enter your email"
              />
              {errors.email && (
                <small className="error-message">{errors.email}</small>
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
                <option value="1">Development</option>
                <option value="2">Business</option>
                <option value="3">Finance & Accounting</option>
                <option value="4">IT & Software</option>
                <option value="5">Office Productivity</option>
                <option value="6">Personal Development</option>
                <option value="7">Design</option>
                <option value="8">Marketing</option>
                <option value="9">Health & Fitness</option>
                <option value="10">Music</option>
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
            <button type="submit" onClick={handleSubmit} className="signup-button">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
