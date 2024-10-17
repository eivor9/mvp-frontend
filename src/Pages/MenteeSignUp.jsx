import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/MenteeSignUp.css";

function MenteeSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = name.trim(); // Trim any extra spaces
    const nameParts = fullName.split(" "); // Split the name by spaces

    // Handle cases where the name might not have both first and last names
    const firstName = nameParts[0] || ""; // Default to empty string if undefined
    const lastName = nameParts.slice(1).join(" ") || ""; // Join the rest as last name

    const newMentee = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password_hash: password,
      is_mentee: true,
      is_mentor: false,
      signup_date: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMentee),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Mentee created:", data);
        console.log("First Name:", data.user.first_name);
        navigate("/", { state: { message: `Thanks for signing up, ${data.user.first_name}!` } });
      } else {
        const errorData = await response.json();
        console.error("Error creating mentee:", errorData);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="MenteeSignUp MentorSignUp">
      <div className="mentor-signup-container">
        <form onSubmit={handleSubmit}>
          <div className="mentor-signup-header">
            <Link to="/"><img src={logo} alt="" /></Link>
            Start your journey
          </div>

          <div className="mentee-signup">
            <label htmlFor="name"> Full Name 
              <input required id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="email"> Email 
              <input required id="email" type="email" placeholder="What's your email address?" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="password"> Password 
              <input minlength="6" maxLength="25" required id="password" type="password" placeholder="Don't forget this!" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign Up</button>
            <Link className="mentor-signup-link" to="/mentor-signup">Here to join the team?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MenteeSignUp;
