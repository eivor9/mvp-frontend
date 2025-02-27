import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import mentee_signup from "../assets/mentee_signup.png";
import "../Styles/MenteeSignup.css";

function MenteeSignUp({ setToken, setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState("linear-gradient(0deg,rgba(177,177,177,0.9)0%,rgba(180,180,180,0.4)100%)")

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if name is empty
    if (!name.trim()) {
      console.error("Name is required");
      return; // Exit if name is empty
    }

    const newMentee = {
      name: name,
      email: email,
      password_hash: password,
      bio: bio,
      is_mentor: false,
      background_color: backgroundColor,
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
        if (data.error == "An account with this email already exists") {
          alert("An account with this email already exists.\nPlease login instead.")
        }else if(data.user.id){
            const { user, token } = data;
            setUser(user);
            setToken(token);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            navigate("/dashboard", { state: { message: `Thanks for signing up, ${data.user.first_name}!` } });
        }
      } else {
        const errorData = await response.json();
        console.error("Error creating mentee:", errorData);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const userInitials = (input) => {
    if (!input) return "";

    let initials = "";
    const userNames = input.split(" ");

    for (const name of userNames)
      if (name) initials += name[0];

    return initials.substring(0,3);
}

  return (
    <div className="MenteeSignUp MentorSignUp">
      <div className="mentor-signup-container" >
        <form onSubmit={handleSubmit}>

        <div className="mentor-signup-header">
            <Link to="/"><img src={logo} alt="" /></Link>
            Become a mentee
          </div>
          <div className="mentee-signup-container">

            <div className="mentee-signup-img-container">
              <img src={mentee_signup} alt="" />
            </div>

            <div className="mentee-signup">
              <label htmlFor="name"> Full Name 
                <input required id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
              </label>

              <label htmlFor="bio"> Background 
                <textarea required value={bio} onChange={(e) => setBio(e.target.value)} placeholder="I'm an aspiring web developer eager to learn and grow in the field..." id="bio" ></textarea> 
              </label>

              <label htmlFor="email"> Email 
                <input required id="email" type="email" placeholder="What's your email address?" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>

              <label htmlFor="password"> Password 
                <input minLength="6" maxLength="25" required id="password" type="password" placeholder="Don't forget this!" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>

              <button type="submit">Sign Up</button>

              <Link className="mentor-signup-link" to="/mentor-signup">Here to mentor instead?</Link>
            </div>

            <div className="mentee-profile-pic-container">
              <div className="mentee-profile-pic" style={{background: backgroundColor}}>{userInitials(name)}</div>
              <div className="profile-pic-options">
                {backgroundColors.map((color, index) => 
                  <div 
                    key={index} // Added unique key prop
                    onClick={() => setBackgroundColor(color)} 
                    style={backgroundColor === color ? {background:color, border:"2px solid rgba(0,0,0,0.4)"} : {background:color}} 
                    className="profile-pic-option">
                  </div>
                )}
              </div>
            </div>

          </div>
          
        </form>
      </div>
    </div>
  );
}

export default MenteeSignUp;
