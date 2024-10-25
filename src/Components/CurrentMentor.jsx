import React, { useState, useEffect } from 'react'
import "../Styles/CurrentMentor.css"

function CurrentMentor({ user, token, currentMentor, setCurrentMentor, currentSkillId }) {

    const[connection, setConnection] = useState({})
    const API = import.meta.env.VITE_BASE_URL;

    const userInitials = (input) => {
        if (!input) return "?";

        let initials = "";
        const userNames = input.split(" ");

        for (const name of userNames){
            initials += name[0];
        }

        return initials;
    }

    useEffect(( )=> {
        setConnection({
            mentee_id: user.id,
            mentor_id: currentMentor.id,
            skill_id: Number(currentSkillId)
        })
    }, [currentMentor, currentSkillId, user, token])
    

    const handleRequestConnection = (e) => {
        e.preventDefault();
        fetch(`${API}/users/${user.id}/connections`,{
            method: "POST",
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(connection)
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload();
        })
        .catch(err => {
            console.error(err)
        })
    }

    const handleAcceptConnection = (e) => {
        e.preventDefault();
        fetch(`${API}/users/${user.id}/connections/${currentMentor.connection_id}`,{
            method: "PUT",
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mentee_id: currentMentor.id,
                mentor_id: user.id,
                id: currentMentor.connection_id,
                skill_id: currentMentor.skill_id,
                status: "active"
            })
        })
        .then(res => res.json())
        .then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.error(err)
        })
    }

  return (
    <>
        <div className="current-mentor-header">
            <div className="current-mentor-profile">
                <div className="current-mentor-pic" style={{background:currentMentor.background_color}}>{userInitials(currentMentor.name)}</div>
                <div className="current-mentor-info">{currentMentor.name}<span>{currentMentor.job_title}</span></div> 
            </div>

            <div className="current-mentor-buttons">
                <div onClick={user.is_mentor ? handleAcceptConnection : handleRequestConnection} className="request-connection current-mentor-button"><i className="fa-regular fa-handshake"></i></div>
                <div onClick={() => setCurrentMentor("No mentor set")} className="back-button current-mentor-button"><i className="fa-solid fa-arrow-rotate-left"></i></div>
            </div>
        </div>

        <div className="current-mentor-bio-container">
            <div className="current-mentor-bio-header">Background</div>
            <div className="current-mentor-bio">{currentMentor.bio}</div>
        </div>

        
    </>
  )
}

export default CurrentMentor