import MentorList from "../Components/MentorList";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../Styles/UserDashNew.css";
import { useState } from 'react';
import assignment_photo from "../assets/assignment.png";
import assignment_photo_2 from "../assets/assignment2.png";

function UserDashNew({ user, token, setUser, setToken }) {

    const [showMentorList, setShowMentorList] = useState(false);
    const [firstCard, setFirstCard] = useState(true);
    const [connections, setConnections] = useState([])
    const [connectionDetails, setConnectionDetails] = useState([])

    // const user = {
    //     name: "Nasheed Jeremiah",
    //     linkedin: "https://www.linkedin.com/in/nasheedjeremiah/",
    //     bio: "I'm an aspiring web developer with a passion for crafting engaging and user-friendly web applications. Currently honing my skills in HTML, CSS, and JavaScript, I am eager to dive deeper into front-end development and responsive design. I thrive in collaborative environments and believe that effective communication and teamwork are essential to creating successful projects. As I learn and grow in this field, I enjoy participating in coding communities and contributing to open-source initiatives. My goal is to build innovative digital experiences that connect people and enhance their online interactions.",
    //     backgroundColor: "linear-gradient(0deg,rgba(163,138,245,1)0%,rgba(163,138,245,0.6)100%)"
    // }
    const navigate = useNavigate();
    const API = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        if (!user) {
          navigate('/login');
        }
      }, [user, navigate]);
    
      if (!user) {
        return null;
      }

   useEffect(()=> {
    fetch(`${API}/users/${user.id}/connections`,{
        headers: {
            'Authorization': token
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        setConnections(res)
    })
    .catch(err => {
        console.error(err)
    })
   }, [])

   // GET ALL CONNECTION DETAILS FOR USER
   useEffect(() => {
    fetch(`${API}/users/${user.id}/connection-details`,{
        headers: {
            "Authorization": token
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        setConnectionDetails(res)
    })
    .catch(err => {
        console.error(err)
    })
   }, [user.id])

// HELPER FUNCTIONS
    const userInitials = (input) => {
        if (!input) return "?";

        let initials = "";
        const userNames = input.split(" ");

        for (const name of userNames){
            initials += name[0];
        }

        return initials;
    }

    const assignmentProgress = () => {
        if (!connections.length) return "No assignments yet";
        
        let assignments = [];
        for (const connection of connections) assignments.push(...connection.assignments);

        let totalInc = [];
        if(assignments.length)
            totalInc = assignments.filter(assignment => !assignment.completed);

        if(totalInc.length){
            return `Progress: ${totalInc.length} assignments remaining out of ${assignments.length}.`;
        } else {
            return "Progress: All assignments completed.";
        }
    }

    const totalProgress = (input) => {
        if(!Object.keys(input.metrics).length) return "0% Completion";

        let total = Object.keys(input.metrics).length;
        let completed = 0;

        for (const metric in input.metrics){
            completed += input.metrics[metric];
        }

        return `${Math.round(completed / total)}% completed`;
    }

    const getTwoOpenAssignments = () => {
        if(!connections.length) return [];

        let assignments = [];
        for (const connection of connections) assignments.push(...connection.assignments);

        const firstRandomIndex = Math.floor(Math.random() * assignments.length);
        let secondRandomIndex = firstRandomIndex;

        while (firstRandomIndex !== secondRandomIndex)
            secondRandomIndex = Math.floor(Math.random() * assignments.length);

        return[assignments[firstRandomIndex], assignments[secondRandomIndex]];
    }

    const getOpenAssignments = (connection) => {
        const assignments = connection.assignments;
        if (!assignments.length) return 0;

        const openAssignments = assignments.filter(x => !x.completed);
        return openAssignments.length;
    }

    const mentorNameFromAssignment = (assignment) => {
        const metric = assignment.metric;

        for (let i = 0; i < connections.length; i++){
            if(Object.keys(connections[i].metrics).includes(metric))
                return connections[i].mentor.name;
        }
    }

    const mentorColorFromAssignment = (assignment) => {
        const metric = assignment.metric;

        for (let i = 0; i < connections.length; i++){
            if(Object.keys(connections[i].metrics).includes(metric))
                return connections[i].mentor.backgroundColor;
        }
    }

    const userFirstName = () => {
        const names = user.name.split(" ");
        return names[0];
    }

    // const dashAssignments = getTwoOpenAssignments();
    // const assignment = firstCard ? dashAssignments[0] : dashAssignments[1];

  return (

    <div className="UserDashNew">
        <div className="dash-user-container">
            <div className="profile-picture" style={{background:user.backgroundColor}}>{userInitials(user.name)}</div>
            <div className="user-info">
                {`Welcome back, ${userFirstName()}`}
                <Link to={user.linkedin} className="dash-user-linkedin"> Your LinkedIn Profile</Link>
            </div>
        </div>

        <div style={{background: firstCard ? "rgba(223, 200, 83, 0.4)" : "rgba(235, 252, 255, 1)"}} className="dash-assignments-container">

            {/* For Mentee Dashboard */}
            {/* 
            <div className="dash-assignment-card">
                <div className="dash-assignment-name">{assignment.name}</div>
                <div className="dash-assignment-body">
                    <div className="dash-assignment-body-container">{assignment.body}</div>
                </div>
                <Link>{assignment.skill}</Link>
            </div> 
            */}

            {/* For Mentor Dashboard */}
            {/* <div className="dash-network-card">
                <div className="network-card-info">
                    <div className="network-card-pic" style={{background:connections[1].mentor.backgroundColor}}>{userInitials(connections[1].mentor.name)}</div>
                    <div className="network-card-text">
                        {connections[1].mentor.name}
                        <span>{connections[1].mentor.job_title}</span>
                    </div>
                </div>
                <div className="network-card-bio">{connections[1].mentor.bio}</div>
                <Link className="network-card-linkedin" target="_blank" to={connections[1].mentor.linkedin}>Connect</Link>
            </div> */}

            

            <div className="dash-assignment-picture">
                <img src={firstCard ? assignment_photo : assignment_photo_2} alt="" />
            </div>


            <div onClick={() => setFirstCard(!firstCard)} className="dash-previous assignment-button"><i className="fa-solid fa-chevron-left"></i></div>
            <div onClick={() => setFirstCard(!firstCard)} className="dash-next assignment-button"><i className="fa-solid fa-chevron-right"></i></div>
        </div>

        <div className="dash-connections-container">
            {showMentorList ? <MentorList user={user} token={token} setShowMentorList={setShowMentorList} connections={connections}/> : null}

            
            <div className="dash-connections-header">
                Your Connections
                <span onClick={()=>setShowMentorList(true)}>{user.is_mentor ? "Pending Connections" : "Learn a new skill"}</span>
            </div>

            <div className="dash-connections">
                {connectionDetails.map(connection => 
                    <div className="dash-connection" key={connection.connection_id}>
                        <div className="profile-picture" style={{background:connection.background_color}} >{userInitials(connection.name)}</div>
                        <div className="dash-connection-mentor">{connection.name}</div>
                        <div className="dash-connection-skill">{connection.skill_name}</div>
                        <div className="dash-connection-completion">{0} assignments left</div>
                    </div>
                )}
            </div>
                
        </div>
        
    </div>
  )
}

export default UserDashNew