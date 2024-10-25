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
    const [connectionDetails, setConnectionDetails] = useState([]);
    const [linkedin, setLinkedin] = useState("");
    const [assignments, setAssignments] = useState([])

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
        setConnectionDetails(res)
    })
    .catch(err => {
        console.error(err)
    })
   }, [user.id])

   // Get all assignments
   useEffect(() => {
    fetch(`${API}/users/${user.id}/recent-assignments`,{
        headers: {
            "Authorization": token
        }
    })
    .then(res => res.json())
    .then(res => setAssignments(res))
    .catch(err => console.error(err))
   }, [])

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

    const addLinkedIn = (e) => {
        e.preventDefault();
        fetch(`${API}/users/${user.id}/`,{
            "method": "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            },
            body:JSON.stringify({
                ...user,
                linkedin
            })
        })
        .then(res => res.json())
        .then(res => {
            setUser({...res, password_hash: null})
        })
        .catch(err => console.error(err))
    }

    const reFetchUser = () => {
        fetch(`${API}/users/${user.id}/`)
            .then(res => res.json())
            .then(res => setUser(res))
            .catch(err => console.error(err))
    }

  return (

    <div className="UserDashNew">
        <div className="dash-user-container">
            <div className="profile-picture" style={{background:user.background_color}}>{userInitials(user.name)}</div>
            <div className="user-info">
                {`Welcome back, ${userFirstName()}`}
                {user.linkedin ? 
                    <Link to={user.linkedin} target="_blank" className="dash-user-linkedin">Your LinkedIn Profile</Link>
                :
                    <form className="liknedin-form" onSubmit={addLinkedIn}>
                        <input required type="url" placeholder="LinkedIn Profile Page" value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                        <button type="submit">Add to profile</button>
                    </form>}   
            </div>
        </div>

        <div style={{background: firstCard ? "rgba(223, 200, 83, 0.4)" : "rgba(235, 252, 255, 1)"}} className="dash-assignments-container">

            
            {user.is_mentor ? 
                 /* For Mentor Dashboard */
                firstCard ?  
                    <div className="dash-network-card">
                        <div className="network-card-info">
                            <div className="network-card-pic" style={{background:"linear-gradient(0deg,rgba(112,205,248,1)0%,rgba(112,205,248,0.6)100%)"}}>{userInitials("Nathan Drake")}</div>
                            <div className="network-card-text">
                                {"Nathan Drake"}
                                <span>{"Backend Developer"}</span>
                            </div>
                        </div>
                        <div className="network-card-bio">{"I'm a dedicated backend developer passionate about building robust and scalable systems. With experience in the PERN stack, I excel at creating seamless data flows and optimizing server performance. My commitment to high-quality code has driven the success of projects, enhancing user experiences along the way."}</div>
                        <Link className="network-card-linkedin" target="_blank" to={"https://linkedin.com"}>Connect on LinkedIn</Link>
                    </div> 
                : 
                    <div className="dash-network-card">
                        <div className="network-card-info">
                            <div className="network-card-pic" style={{background:"linear-gradient(0deg,rgba(252,201,59,1)0%,rgba(252,201,5,0.6)100%)"}}>{userInitials("Joel Miller")}</div>
                            <div className="network-card-text">
                                {"Joel Miller"}
                                <span>{"Data Scientist"}</span>
                            </div>
                        </div>
                        <div className="network-card-bio">{"I'm a dedicated data scientist with a passion for extracting insights from complex datasets. With experience in statistical analysis and machine learning, I excel at turning data into actionable solutions. My commitment to high-quality models and analyses has driven project success, enhancing decision-making and optimizing outcomes."}</div>
                        <Link className="network-card-linkedin" target="_blank" to={"https://linkedin.com"}>Connect on LinkedIn</Link>
                    </div> 

                /* For Mentee Dashboard */
            : firstCard ?
                <div className="dash-assignment-card">
                    <div className="dash-assignment-name">{"Example Assignment"}</div>
                    <div className="dash-assignment-body">
                        <div className="dash-assignment-body-container">{"Completing coding challenges: https://replit.com/@njeremiah/SoreEllipticalLanguage"}</div>
                    </div>
                    <Link>{"JavaScript"}</Link>
                </div>
            :
                <div className="dash-assignment-card">
                    <div className="dash-assignment-name">{"Example Assignment 2"}</div>
                    <div className="dash-assignment-body">
                        <div className="dash-assignment-body-container">{"Watch this lecture and take notes: https://www.youtube.com/watch?v=vHYeChEf2lA"}</div>
                    </div>
                    <Link>{"SQL"}</Link>
                </div>
            }


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
                {connectionDetails.filter(x => x.status == "active").map(connection => 
                    <div className="dash-connection" key={connection.connection_id} onClick={() => navigate(`/progress/${connection.connection_id}`)}>
                        <div className="profile-picture" style={{background:connection.background_color}} >{userInitials(connection.name)}</div>
                        <div className="dash-connection-mentor">{connection.name}</div>
                        <div className="dash-connection-skill">{connection.skill_name}</div>
                        <div className="dash-connection-completion">{!assignments.length ? 0 : assignments.filter(x => x.connection_id == connection.connection_id).length} assignments left</div>
                    </div>
                )}
            </div>
                
        </div>
        
    </div>
  )
}

export default UserDashNew