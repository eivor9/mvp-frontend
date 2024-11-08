import "../Styles/MentorSignUp.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function MentorSignUp({ setToken, setUser }) {
    const [showJobInput, setShowJobInput] = useState(false);
    const [name, setName] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("linear-gradient(0deg,rgba(177,177,177,0.9)0%,rgba(180,180,180,0.4)100%)");
    const [noSkills, setNoSkills] = useState(false);
    
    const navigate = useNavigate();

    const backgroundColors = [
        "linear-gradient(0deg,rgba(177,177,177,0.9)0%,rgba(180,180,180,0.4)100%)",
        "linear-gradient(0deg,rgba(252, 116, 149,0.9)0%,rgba(252,116,149,0.5)100%)",
        "linear-gradient(0deg,rgba(253,87,77,1)0%,rgba(253,87,77,0.6)100%)",
        "linear-gradient(0deg,rgba(253,159,53,1)0%,rgba(253,159,53,0.6)100%)",
        "linear-gradient(0deg,rgba(252,201,59,1)0%,rgba(252,201,5,0.6)100%)",
        "linear-gradient(0deg,rgba(101,219,118,1)0%,rgba(101,219,118,0.6)100%)",
        "linear-gradient(0deg,rgba(112,205,248,1)0%,rgba(112,205,248,0.6)100%)",
        "linear-gradient(0deg,rgba(163,138,245,1)0%,rgba(163,138,245,0.6)100%)"
    ];

    const userInitials = (input) => {
        if (!input) return "";

        let initials = "";
        const userNames = input.split(" ");

        for (const name of userNames)
            if (name) initials += name[0];

        return initials.substring(0,3);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gather data from the form
        const newMentor = {
            name: document.getElementById("name").value,
            bio: document.getElementById("bio").value,
            email: document.getElementById("email").value,
            password_hash: document.getElementById("password_hash").value,
            job_title: showJobInput ? document.getElementById("job_title").value || "Open to new roles" : "Open to new roles",
            skills: [
                document.getElementById("js-checkbox").checked ? "JavaScript" : null,
                document.getElementById("html-checkbox").checked ? "HTML" : null,
                document.getElementById("css-checkbox").checked ? "CSS" : null,
                document.getElementById("sql-checkbox").checked ? "SQL" : null,
                document.getElementById("wd-checkbox").checked ? "Web Development" : null,
                document.getElementById("ti-checkbox").checked ? "Technical Interview Prep" : null,
                document.getElementById("bi-checkbox").checked ? "Behavioral Interview Prep" : null,
            ].filter(Boolean), // Remove null values
            is_mentor: true,
            background_color: backgroundColor
        };

        if(!newMentor.skills.length){
            setNoSkills(true);
            return;
        }

        // Validate required fields
        if (!newMentor.name.trim() || !newMentor.email.trim() || !newMentor.password_hash.trim()) {
            console.error("Name, email, and password are required");
            return; // Exit if required fields are empty
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMentor),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.error == "An account with this email already exists") {
                    alert("An account with this email already exists.\nPlease login instead.")
                }
                else if(data.user.id){
                    const { user, token } = data;
                    setUser(user);
                    setToken(token);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', token);
                    navigate("/dashboard", { state: { message: `Thanks for signing up, ${data.user.name}!` } });
                } 
            } else {
                const errorData = await response.json();
                console.error("Error creating mentor:", errorData);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

  return (
    <div className="MentorSignUp">
        <div className="mentor-signup-container">
            <form onSubmit={handleSubmit}>
                <div className="mentor-signup-header">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    Become a mentor
                </div>
                <div className="mentor-signup">
                    <div className="mentor-signup-left">

                        <div className="mentor-signup-subheading">Personal Info</div>
                        <label htmlFor="name"> Full Name <input required  value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" id="name" type="text" /> </label>
                        <label htmlFor="bio"> Background <textarea required placeholder="I am a versatile web developer with over five years of experience in building responsive websites and web applications..." id="bio" ></textarea> </label>

                        <div className="mentor-job-title-container">
                            <label className="enter-job-title" htmlFor="enter-job-title"><input value={showJobInput} onChange={() => setShowJobInput(!showJobInput)} type="checkbox" id="enter-job-title" />I am currently employed</label>
                            {showJobInput ? <label className="mentor-job-title-label" htmlFor="job_title"> Job Title <input placeholder="Full Stack Web Developer (Optional)" type="text" id="job_title" /></label> : null}
                        </div>

                        <div style={noSkills ? {border: "2px solid rgba(255,0,0,0.7)", padding: "10px", borderRadius: "5px"} : {padding: "12px"}} className="mentor-signup-skills">
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
                    <div className="mentee-profile-pic-container">
                        <div className="mentee-profile-pic" style={{background: backgroundColor}}>{userInitials(name)}</div>
                        <div className="profile-pic-options">
                            {backgroundColors.map((color, index) => 
                                <div 
                                    key={index} // Add a unique key prop
                                    onClick={() => setBackgroundColor(color)} 
                                    style={backgroundColor === color ? {background:color, border:"2px solid rgba(0,0,0,0.4)"} : {background:color}} 
                                    className="profile-pic-option">
                                </div>
                            )}
                        </div>
                    
                    </div>
                        <div className="right-input-container">
                            <label htmlFor="email"> Email <input required id="email" type="email" placeholder="What's your email address?" /> </label>
                            <label htmlFor="password_hash"> Password <input minLength="6" maxLength="255" required id="password_hash" type="password" placeholder="Don't forget this!" /> </label>
                            <button type="submit">Sign Up</button>
                        </div>
                        <Link className="mentee-signup-link" to="/mentee-signup">Become a mentee instead</Link>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default MentorSignUp
