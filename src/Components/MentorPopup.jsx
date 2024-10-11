import React, { useEffect } from 'react';
import "../Styles/MentorPopup.css";
import profilepic from "../assets/default.jpeg"

function MentorPopup(props) {
    const { currentMentor, setCurrentMentor, menteeId, currentCategory } = props;
    const API = import.meta.env.VITE_BASE_URL;

    const requestConnection = () => {
        console.log("category_id", currentCategory);
        fetch(`${API}/users/${menteeId}/connections`, {
            method: "POST",
            body: JSON.stringify({
                "mentor_id": Number(currentMentor.id),
                "mentee_id": Number(menteeId),
                "category_id": Number(currentCategory),
                "status": "pending"
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            setCurrentMentor("No Current Mentor")
          })
    }

  return (
    <div className='MentorPopup'>
        <div className="mentor-popup-background">
            <div className="mentor-popup-contents">
                <div className="mentor-popup-bio"><span>Bio</span><br/>{currentMentor.bio || "No bio yet.."}</div>
                <div className="mentor-popup-info">
                    <img className='mentor-popup-img' src={profilepic} alt="" />
                    {`${currentMentor.first_name} ${currentMentor.last_name}`}
                    <span>{currentMentor.job_title}</span>
                    <div className="mentor-popup-buttons">
                        <div onClick={requestConnection} className="mentor-popup-connect mentor-popup-button">Connect</div>
                        <div onClick={() => setCurrentMentor("No Current Mentor")} className="mentor-popup-close mentor-popup-button">Close</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MentorPopup