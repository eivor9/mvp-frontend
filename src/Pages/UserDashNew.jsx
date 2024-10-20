import MentorList from "../Components/MentorList";
import { Link } from 'react-router-dom';
import "../Styles/UserDashNew.css";
import { useState } from 'react';

function UserDashNew() {

    const [showMentorList, setShowMentorList] = useState(false);

    const user = {
        name: "Nasheed Jeremiah",
        linkedin: "https://www.linkedin.com/in/nasheedjeremiah/",
        bio: "I'm an aspiring web developer with a passion for crafting engaging and user-friendly web applications. Currently honing my skills in HTML, CSS, and JavaScript, I am eager to dive deeper into front-end development and responsive design. I thrive in collaborative environments and believe that effective communication and teamwork are essential to creating successful projects. As I learn and grow in this field, I enjoy participating in coding communities and contributing to open-source initiatives. My goal is to build innovative digital experiences that connect people and enhance their online interactions.",
        backgroundColor: "linear-gradient(0deg,rgba(163,138,245,1)0%,rgba(163,138,245,0.6)100%)"
    }

    const connections = [
        {
            mentor: {name:"Joel Miller", linkedin: "https://www.linkedin.com/", backgroundColor: "linear-gradient(0deg, rgba(129,212,250,1) 0%, rgba(129,212,250,0.4) 100%)", bio: "I'm a skilled web developer passionate about creating dynamic, user-friendly applications. With a strong foundation in HTML, CSS, and JavaScript, I excel in front-end development and responsive design. I have a knack for behavioral interviews, using effective communication and problem-solving skills to connect with teams and stakeholders. I believe that collaboration and empathy are essential to successful projects. Outside of coding, I enjoy contributing to open-source projects and staying updated on the latest web technologies. My goal is to build impactful digital experiences that enhance user engagement and satisfaction."},
            mentee: {name:"Nasheed Jeremiah", linkedin: "https://www.linkedin.com/", backgroundColor: "linear-gradient(0deg, rgba(129,212,250,1) 0%, rgba(129,212,250,0.4) 100%)", bio: "I'm an aspiring web developer with a passion for crafting engaging and user-friendly web applications. Currently honing my skills in HTML, CSS, and JavaScript, I am eager to dive deeper into front-end development and responsive design. I thrive in collaborative environments and believe that effective communication and teamwork are essential to creating successful projects. As I learn and grow in this field, I enjoy participating in coding communities and contributing to open-source initiatives. My goal is to build innovative digital experiences that connect people and enhance their online interactions."}, 
            skill: "Behavioral Interview Prep",
            metrics: { "Communication and Storytelling": 50, "Speech Problem-Solving and Adaptability": 50, "Leadership and Initiative": 100 },
            assignments: [
                {
                    name: "The STAR Method",
                    body: "The STAR method is a powerful framework for answering behavioral interview questions by focusing on four key elements: Situation, Task, Action, and Result. Start by briefly describing the context (Situation) and the challenge you faced (Task). Then, emphasize the specific steps you took to address the issue (Action), detailing your role and the skills you applied. Finally, conclude by sharing the outcome (Result), highlighting positive impacts or measurable success. Practicing with real-life examples helps you stay concise and ensures your responses effectively showcase your problem-solving and decision-making abilities.",
                    metric: "Communication and Storytelling",
                    completed: false,
                    due_date: "2024-11-22",
                    skill: "Behavioral Interview Prep",
                },
                {
                    name: "Teamwork and Collaboration",
                    body: "",
                    metric: "Communication and Storytelling",
                    completed: true,
                    due_date: "2024-11-08",
                    skill: "Behavioral Interview Prep",
                },
                {
                    name: "Problem-Solving and Decision-Making",
                    body: "Start by selecting three challenging workplace scenarios, like handling a missed project deadline or resolving a team conflict. Break each problem down into smaller parts: identify the core issue, brainstorm at least three solutions, and evaluate the pros and cons of each option. Choose the best solution, explain why, and consider possible outcomes. Next, rehearse explaining your thought process clearly and concisely to a friend or mentor. Finally, review industry-specific case studies to understand how experts approach problem-solving in real-world situations.",
                    metric: "Speech Problem-Solving and Adaptability",
                    completed: false,
                    skill: "Behavioral Interview Prep",
                    due_date: "2024-11-23"
                },
                {
                    name: "Adaptability and Flexibility",
                    body: "",
                    metric: "Speech Problem-Solving and Adaptability",
                    completed: true,
                    skill: "Behavioral Interview Prep",
                    due_date: "2024-11-02"
                },
                {
                    name: "Take Ownership of a New Initiative",
                    body: "",
                    metric: "Leadership and Initiative",
                    completed: true,
                    skill: "Behavioral Interview Prep",
                    due_date: "2024-11-11"
                }
            ]
        },
        {            
            mentor: {name:"Nathan Drake", linkedin: "https://www.linkedin.com/", backgroundColor:"linear-gradient(0deg,rgba(101,219,118,1)0%,rgba(101,219,118,0.6)100%)", bio: "I'm a skilled web developer passionate about creating dynamic, user-friendly applications. With a strong foundation in HTML, CSS, and JavaScript, I excel in front-end development and responsive design. I have a knack for behavioral interviews, using effective communication and problem-solving skills to connect with teams and stakeholders. I believe that collaboration and empathy are essential to successful projects. Outside of coding, I enjoy contributing to open-source projects and staying updated on the latest web technologies. My goal is to build impactful digital experiences that enhance user engagement and satisfaction."},
            mentee: {name:"Nasaheed Jeremiah", linkedin: "https://www.linkedin.com/", bio: "I'm an aspiring web developer with a passion for crafting engaging and user-friendly web applications. Currently honing my skills in HTML, CSS, and JavaScript, I am eager to dive deeper into front-end development and responsive design. I thrive in collaborative environments and believe that effective communication and teamwork are essential to creating successful projects. As I learn and grow in this field, I enjoy participating in coding communities and contributing to open-source initiatives. My goal is to build innovative digital experiences that connect people and enhance their online interactions."}, 
            skill: "SQL",
            metrics: { "Data Manipulation (CRUD)": 100, "Database Design": 67, "Security Control and Query Optimization": 100 },
            assignments: [
                {
                    name: "CRUD Operations: Data Manipulation in SQL",
                    body: "",
                    metric: "Data Manipulation (CRUD)",
                    completed: true,
                    skill: "SQL",
                    due_date: "2024-11-22"
                },
                {
                    name: "Defining Databases in Full-Stack Apps",
                    body: "",
                    metric: "Database Design",
                    completed: true,
                    skill: "SQL",
                    due_date: "2024-11-08"
                },
                {
                    name: "DDL and DML: Key Differences",
                    body: "To understand the key differences between Data Definition Language (DDL) and Data Manipulation Language (DML), perform the following tasks. First, research the main commands for each: DDL includes CREATE, ALTER, DROP, and TRUNCATE for defining and modifying database structures, while DML uses SELECT, INSERT, UPDATE, and DELETE to manage and manipulate data within those structures. Next, create a sample database and apply DDL commands to set up tables. Then, use DML commands to add, retrieve, modify, and remove data. Document each step, explaining how DDL affects database structure while DML handles the actual data within it.",
                    metric: "Database Design",
                    completed: false,
                    skill: "SQL",
                    due_date: "2024-11-23"
                },
                {
                    name: "Creating and Modifying Tables",
                    body: "",
                    metric: "Database Design",
                    completed: true,
                    skill: "SQL",
                    due_date: "2024-11-02"
                },
                {
                    name: "Connecting to psql: Essential Commands",
                    body: "",
                    metric: "Security Control and Query Optimization",
                    completed: true,
                    skill: "SQL",
                    due_date: "2024-11-11"
                }
            ]
        }
    ]

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

    const getAllOpenAssignments = () => {
        if(!connections.length) return [];

        let assignments = [];
        for (const connection of connections) assignments.push(...connection.assignments);

        const openAssignments = assignments.filter(assignment => !assignment.completed);
        return openAssignments.slice(0, 3);
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

  return (
    <div className="UserDashNew">
        <div className="dash-user-container">
            
            <div className="dash-user-info">
                <div className="profile-picture" style={{background:user.backgroundColor}}>{userInitials(user.name)}</div>
                <div className="user-info">
                    {user.name || "?"}
                    <div className="dash-user-progress">{assignmentProgress()}</div>
                </div>
            </div>

            <div className="dash-user-buttons">
                <Link className='user-linkedin dash-user-button' to={user.linkedin || "https://www.linkedin.com/"} target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                    LinkedIn
                </Link>
                
                <div className="dash-categories-button dash-user-button" onClick={() => setShowMentorList(true)}>
                    <i className="fa-solid fa-microchip"></i>
                    New Skill
                </div>

                {showMentorList ? <MentorList setShowMentorList={setShowMentorList}/> : null}
            </div>

        </div>

        <div className="dash-connections-container">
            <div className="dash-assignments-header">Mentors</div>

            <div className="dash-connections">
                {connections.length ? connections.map(connection => 
                    <div className="dash-connection" style={{background:connection.mentor.backgroundColor}} key={connection.skill}>
                        <div className="profile-picture">{userInitials(connection.mentor.name)}</div>
                        <div className="dash-connection-skill">{connection.skill}</div>
                        <div className="dash-connection-completion">{totalProgress(connection)}</div>
                    </div>
                ):null}
            </div>
                
        </div>
            

        <div className="dash-assignments-container">
            <div className="dash-assignments-header">Upcoming Assignments</div>

            <div className="dash-assignments">
                {getAllOpenAssignments().length ? getAllOpenAssignments().map(assignment =>
                    <div key={assignment.name} className="dash-assignment">
                            <div className="dash-assignment-mentor" style={{background:mentorColorFromAssignment(assignment)}}>{userInitials(mentorNameFromAssignment(assignment))}</div>
                            <div className="dash-assignment-name">{assignment.name.length < 25 ? assignment.name : assignment.name.substring(0, 25) + "..."}</div>
                            <div className="dash-assignment-body" >{assignment.body.length < 540 ? assignment.body : assignment.body.substring(0, 540) + "..."}</div>
                            <div className="dash-assignment-skill">{assignment.skill}</div>
                    </div>
                ):null}
            </div>
        </div>
    </div>
  )
}

export default UserDashNew