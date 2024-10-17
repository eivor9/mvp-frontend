import "../Styles/MentorSignUp.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function MentorSignUp() {
    const [showJobInput, setShowJobInput ] = useState(false);

  return (
    <div className="MentorSignUp">
        <div className="mentor-signup-container">
            <form>
                <div className="mentor-signup-header">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    Join the team
                </div>
                <div className="mentor-signup">
                    <div className="mentor-signup-left">

                        <div className="mentor-signup-subheading">Personal Info</div>
                        <label htmlFor="name"> Full Name <input required placeholder="Enter your full name" id="name" type="text" /> </label>
                        <label htmlFor="bio"> Background <textarea required placeholder="I am a versatile web developer with over five years of experience in building responsive websites and web applications..." id="bio" ></textarea> </label>

                        <div className="mentor-job-title-container">
                            <label className="enter-job-title" htmlFor="enter-job-title"><input value={showJobInput} onChange={() => setShowJobInput(!showJobInput)} type="checkbox" id="enter-job-title" />I am currently employed</label>
                            {showJobInput ? <label className="mentor-job-title-label" htmlFor="job_title"> Job Title <input placeholder="Full Stack Web Developer (Optional)" type="text" id="job_title" /></label> : null}
                        </div>

                        <div className="mentor-signup-skills">
                            <div className="mentor-signup-skills-header">Skills</div>
                            <label htmlFor="js-checkbox"><input type="checkbox" id="js-checkbox" /> JavaScript </label>
                            <label htmlFor="html-checkbox"><input type="checkbox" id="html-checkbox" /> HTML </label>
                            <label htmlFor="css-checkbox"><input type="checkbox" id="css-checkbox" /> CSS </label>
                            <label htmlFor="sql-checkbox"><input type="checkbox" id="sql-checkbox" /> SQL </label>
                            <label htmlFor="wd-checkbox"><input type="checkbox" id="wd-checkbox" /> Web Development </label>
                            <label htmlFor="ti-checkbox"><input type="checkbox" id="ti-checkbox" /> Technical Interview Prep </label>
                            <label htmlFor="bi-checkbox"><input type="checkbox" id="bi-checkbox" /> Behavioral Interview Prep </label>
                        </div>

                    </div>
                    <div className="mentor-signup-right">
                        <div className="right-input-container">
                            <label htmlFor="email"> Email <input required id="email" type="email" placeholder="What's your email address?" /> </label>
                            <label htmlFor="password_hash"> Password <input minlength="6" maxLength="25" required id="password_hash" type="password" placeholder="Don't forget this!" /> </label>
                            <button type="submit">Sign Up</button>
                        </div>
                        <Link className="mentee-signup-link" to="/mentee-signup">Just starting your journey?</Link>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default MentorSignUp