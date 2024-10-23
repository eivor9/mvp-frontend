import { useState, useEffect } from 'react'
import "../Styles/TrackProgress.css";
import zoom from "../assets/zoom.png";
import linkedin from "../assets/linkedin.png";
import { Link, useParams } from 'react-router-dom';
import { red } from '@mui/material/colors';

function TrackProgress({ user, token }) {
    const { connection_id } = useParams();
    const API = import.meta.env.VITE_BASE_URL;

    const [metrics, setMetrics] = useState(["default"]);
    const [connection, setConnection] = useState(null);
    const [firstBanner, setFirstBanner] = useState(true);
    const [currentMetric, setCurrentMetric] = useState({id:1});
    const [assignments, setAssignments] = useState([]);
    const [newAssignment, setNewAssignment] = useState({
        name: "",
        body: "",
        metric_id: null,
        due_date: new Date(),
        is_completed: false,
        connection_id: Number(connection_id)
    })
    const [currentAssignment, setCurrentAssignment] = useState({id:0});
    const [showAssingmentForm, setShowAssingmentForm] = useState(false);
    const [connectionDetails, setConnectionDetails] = useState({linkedin: "https://linked.com"});

    useEffect(() => {
        fetch(`${API}/users/${user.id}/connections/${connection_id}`,{
            headers: {
                'Authorization': token
            }
        })
        .then(res => res.json())
        .then(res => setConnection(res))
        .catch(err => console.error(err))
    }, [connection_id])

    useEffect(() => {
        fetch(`${API}/users/${user.id}/connection-details/`,{
            headers: {
                'Authorization': token
            }
        })
        .then(res => res.json())
        .then(res => {
            const currentConnection = res.find(x => Number(x.connection_id) == Number(connection_id));
            setConnectionDetails(currentConnection)
        })
        .catch(err => console.error(err))
    }, [connection_id])

    useEffect(() => {
        fetch(`${API}/users/${user.id}/connections/${connection_id}/metrics/all`,{
            headers: {
                'Authorization': token
            }
        })
        .then(res => res.json())
        .then(res => {
            setMetrics(res);
            setCurrentMetric(res[0]);
            setNewAssignment({...newAssignment, metric_id: Number(res[0].id)});
        })
        .catch(err => console.error(err))
    }, [connection_id])

    useEffect(() => {
        fetch(`${API}/users/${user.id}/connections/${connection_id}/assignments`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setAssignments(res);
        })
        .catch(err => console.error(err))
    }, [connection_id])

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewAssignment({...newAssignment, metric_id: Number(currentMetric.id)})
        addAssignment();
    }

    const updateAssignment = () => {
        fetch(`${API}/users/${user.id}/connections/${connection_id}/assignments/${currentAssignment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...currentAssignment, is_completed: true})
        })
        .then(res => res.json())
        .then(res => window.location.reload())
    }

    const addAssignment = () => {
        fetch(`${API}/users/${user.id}/connections/${connection_id}/assignments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res => res.json())
        .then(res => window.location.reload())
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Function to format the month
    const formatMonth = (dateString) => {
        const options = { month: 'long' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

  // Function to format the day
    const formatDay = (dateString) => {
        const options = { day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    

  return (
    <div className="TrackProgress">
        <div onClick={() => setFirstBanner(!firstBanner)} className="banner-prev-button"><i className="fa-solid fa-chevron-left"></i></div>
        <div onClick={() => setFirstBanner(!firstBanner)} className="banner-next-button"><i className="fa-solid fa-chevron-right"></i></div>
        <Link target='_blank' to={firstBanner ? connectionDetails.linkedin : connection.zoom || "https://zoom.com"} style={{right: firstBanner ? "1070px" : "1010px"}} className="progress-linkedin">{firstBanner ? <>Linked<i className="fa-brands fa-linkedin"></i></> : <>Join the meeting</>}</Link>

        {currentAssignment.id ? 
            <div className="MentorList">
                <div onClick={() => setCurrentAssignment({id:0})} className="mentor-list-background"></div>
                <div className="mentor-list-container">
                    <div className="progress-assingment-display">
                        <div className="progress-assingment-name">{currentAssignment.name}</div>
                        <div className="progress-assignment-metric">{currentMetric.name}</div>
                        <div className="progress-assignment-body-header">Body</div>
                        <div className="progress-assignment-body">{currentAssignment.body}</div>
                        <div onClick={updateAssignment} className="completed-button"><i style={currentAssignment.is_completed ? {color: "green"} : null} className="fa-regular fa-circle-check"></i></div>
                        <div className="assignment-date">{formatMonth(currentAssignment.due_date).substring(0,3)}<span>{formatDay(currentAssignment.due_date).substring(0,3)}</span></div>
                    </div>
                </div>
            </div>
        :null}

        {showAssingmentForm ? 
            <div className="MentorList">
                <div onClick={() => setShowAssingmentForm(false)} className="mentor-list-background"></div>
                <div className="mentor-list-container">
                    <form onSubmit={handleSubmit} className="new-assignment-form">
                        <label required htmlFor="due_date">Due Date <input onChange={(e) => setNewAssignment({...newAssignment, "due_date": e.target.value})} type="date" id="due_date"/></label>
                        <label required htmlFor="name">Name <input onChange={(e) => setNewAssignment({...newAssignment, "name": e.target.value})} id="name" type="text"/></label>
                        <label required htmlFor="body">Body <textarea onChange={(e) => setNewAssignment({...newAssignment, "body": e.target.value})} id="body"></textarea></label>
                        <button className='create-assignment-button' type="submit"><i className="fa-solid fa-plus"></i></button>
                    </form>
                </div>
            </div>
        :null}

        <div style={{background: firstBanner ? "rgb(245, 246, 248)" : "rgb(85, 148, 255)"}} className="progress-banner">
            <div className="progress-banner-card">
                <div className="progress-mentor-name">{firstBanner ? <>{connectionDetails.name}<span>{connectionDetails.job_title || "New Developer"}</span></> : <>{connectionDetails.skill_name}<span>Meeting ID: 999 999 9999</span></>}</div>
            </div>
            <div className="progress-banner-img"><img src={firstBanner ? linkedin : zoom} /></div>
        </div>

        <div className="CategoryDescriptions progress-assignments-container" id="CategoryDescriptions">
            <div className="home-category-buttons">
                {metrics.map(metric => 
                    <div key={metric.name} onClick={() => { setCurrentMetric(metric); setNewAssignment({...newAssignment, metric_id: Number(metric.id)})}} style={currentMetric.id == metric.id ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">{metric.name}</div>
                )}
            </div>

            <div className="progress-assignments">
                {user.is_mentor ? 
                    <div className="progress-assignment" onClick={() => setShowAssingmentForm(true)}>
                        <div className="progress-assignment-name">Create New Assignment</div>
                        <div className="progress-assignment-date"></div>
                    </div>
                :null}

                {assignments.filter(x => x.metric_id == currentMetric.id).sort((x, y) => x.due_date < y.due_date ? -1 : 1).map(x => 
                    <div className="progress-assignment" onClick={() => setCurrentAssignment(x)}>
                        <div className="progress-assignment-name">{x.name}</div>
                        <div className="progress-assignment-date">{formatDate(x.due_date)}{x.is_completed ? <i className="fa-regular fa-circle-check"></i> : null}</div>
                    </div>
                )}
            </div>
            
        
        </div>
    </div>
  )
}

export default TrackProgress;