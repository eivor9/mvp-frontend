import React from 'react'
import "../Styles/CurrentMentor.css"

function CurrentMentor({ mentor, setCurrentMentor }) {

    const userInitials = (input) => {
        if (!input) return "?";

        let initials = "";
        const userNames = input.split(" ");

        for (const name of userNames){
            initials += name[0];
        }

        return initials;
    }

  return (
    <>
        <div className="current-mentor-header">
            <div className="current-mentor-profile">
                <div className="current-mentor-pic" style={{background:mentor.backgroundColor}}>{userInitials(mentor.name)}</div>
                <div className="current-mentor-info">{mentor.name}<span>{mentor.job_title}</span></div> 
            </div>

            <div className="current-mentor-buttons">
                <div className="request-connection current-mentor-button"><i class="fa-regular fa-handshake"></i></div>
                <div onClick={() => setCurrentMentor("No mentor set")} className="back-button current-mentor-button"><i class="fa-solid fa-arrow-rotate-left"></i></div>
            </div>
        </div>

        <div className="current-mentor-bio-container">
            <div className="current-mentor-bio-header">Background</div>
            <div className="current-mentor-bio">{mentor.bio}</div>
        </div>

        
    </>
  )
}

export default CurrentMentor