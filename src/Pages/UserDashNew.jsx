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
    const [hasLinkedin, setHasLinkedin] = useState(user.linkedin);

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
            setHasLinkedin(res.user.linkedin);
            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("token", JSON.stringify(res.token));
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
                {`Welcome, ${userFirstName()}`}
                {hasLinkedin ? 
                    <Link to={hasLinkedin} target="_blank" className="dash-user-linkedin">Your LinkedIn Profile</Link>
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
                            <div className="network-card-pic" style={{background:"linear-gradient(0deg,rgba(112,205,248,1)0%,rgba(112,205,248,0.6)100%)"}}>{userInitials("Anicka Lewis")}</div>
                            <div className="network-card-text">
                                {"Anicka Lewis"}
                                <span>{"Open to new roles"}</span>
                            </div>
                        </div>
                        <div className="network-card-bio">{"Freelance Software Developer willing to help elevate junior development in their tech journey. With a strong foundation in HTML, CSS, and Javascript, I've built multiple full stack web applications with various technologies.  I bring a practical and engaging approach to coding. I am looking to help developers at a beginner and intermediate level to build their skills to the best of their abilities. I am excited to share my knowledge, insights and tips to those eager to excel."}</div>
                        <Link className="network-card-linkedin" target="_blank" to={"https://www.linkedin.com/in/anickalewiss/"}>Connect on LinkedIn</Link>
                    </div> 
                : 
                    <div className="dash-network-card">
                        <div className="network-card-info">
                            <div className="network-card-pic" style={{background:"linear-gradient(0deg,rgba(252,201,59,1)0%,rgba(252,201,5,0.6)100%)"}}>{userInitials("Nasheed Jeremmiah")}</div>
                            <div className="network-card-text">
                                {"Nasheed Jeremiah"}
                                <span>{"FullStack Software Engineer"}</span>
                            </div>
                        </div>
                        <div className="network-card-bio">{"I build reliable, scalable apps from database to UI. A pragmatic problem-solver dedicated to clean code and exceptional user experiences."}</div>
                        <Link className="network-card-linkedin" target="_blank" to={"https://linkedin.com/in/nasheedjeremiah"}>Connect on LinkedIn</Link>
                    </div> 

                /* For Mentee Dashboard */
            : firstCard ?
                <div className="dash-assignment-card">
                    <div className="dash-assignment-name">{"Example Assignment"}</div>
                    <div className="dash-assignment-body">
                        <div className="dash-assignment-body-container">Completing coding challenge:<br/><Link target="_blank" to={"https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript"}>codewars: Convert a Number to a String!</Link></div>
                    </div>
                    <Link>{"JavaScript"}</Link>
                </div>
            :
                <div className="dash-assignment-card">
                    <div className="dash-assignment-name">{"Example Assignment 2"}</div>
                    <div className="dash-assignment-body">
                        <div className="dash-assignment-body-container">Watch this lecture and take notes:<br/><Link target="_blank" to={"https://www.youtube.com/watch?v=oqRU2So6Z2Y"}>
CS50x 2026 - Lecture 7 - SQL</Link></div>
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
                        <div className="dash-connection-completion">{!assignments.length ? 0 : assignments.filter(x => x.connection_id == connection.connection_id && !x.is_completed).length} assignments left</div>
                    </div>
                )}
            </div>
                
        </div>
        
    </div>
  )
}

export default UserDashNew
