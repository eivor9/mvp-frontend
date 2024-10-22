import { useState } from 'react'
import "../Styles/TrackProgress.css";
import zoom from "../assets/zoom.png";
import linkedin from "../assets/linkedin.png";
import { Link } from 'react-router-dom';

function TrackProgress() {
    const [firstBanner, setFirstBanner] = useState(true);
    const [currentMetric, setCurrentMetric] = useState("1");

  return (
    <div className="TrackProgress">
        <div onClick={() => setFirstBanner(!firstBanner)} className="banner-prev-button"><i className="fa-solid fa-chevron-left"></i></div>
        <div onClick={() => setFirstBanner(!firstBanner)} className="banner-next-button"><i className="fa-solid fa-chevron-right"></i></div>
        <Link style={{right: firstBanner ? "1070px" : "1010px"}} className="progress-linkedin">{firstBanner ? <>Linked<i className="fa-brands fa-linkedin"></i></> : <>Join the meeting</>}</Link>

        <div style={{background: firstBanner ? "rgb(245, 246, 248)" : "rgb(85, 148, 255)"}} className="progress-banner">
            <div className="progress-banner-card">
                <div className="progress-mentor-name">{firstBanner ? <>Nathan Drake<span>Treasure Hunter</span></> : <>Behavioral Interview Prep<span>Meeting ID: </span></>}</div>
            </div>
            <div className="progress-banner-img"><img src={firstBanner ? linkedin : zoom} /></div>
        </div>

        <div className="CategoryDescriptions progress-assignments-container" id="CategoryDescriptions">
            <div className="home-category-buttons">
                <div onClick={() => setCurrentMetric("1")} style={currentMetric == "1" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">Introduction to JavaScript and Its Foundations</div>
                <div onClick={() => setCurrentMetric("2")} style={currentMetric == "2" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">Control Flow and Functions</div>
                <div onClick={() => setCurrentMetric("3")} style={currentMetric == "3" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">Objects, Arrays, and DOM Manipulation</div>
            </div>

            <div className="progress-assignments">
                <div className="progress-assignment">
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default TrackProgress;