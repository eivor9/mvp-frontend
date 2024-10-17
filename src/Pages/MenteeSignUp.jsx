import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/MenteeSignUp.css";

function MenteeSignUp() {
  return (
    <div className="MenteeSignUp MentorSignUp">
        <div className="mentor-signup-container">
            <form>
                <div className="mentor-signup-header">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    Start your journey
                </div>

                <div className="mentee-signup">
                    <label htmlFor="name"> Full Name <input required id="name" type="text" placeholder="Alex Johnson" /> </label>
                    <label htmlFor="name"> Email <input required id="email" type="email" placeholder="What's your email address?" /> </label>
                    <label htmlFor="name"> Password <input minlength="6" maxLength="25" required id="password_hash" type="passwaord" placeholder="Don't forget this!" /> </label>
                    <button type="submit">Sign Up</button>
                    <Link className="mentor-signup-link" to="/mentor-signup">Here to join the team?</Link>
                </div>

            </form>
        </div>
    </div>
  )
}

export default MenteeSignUp