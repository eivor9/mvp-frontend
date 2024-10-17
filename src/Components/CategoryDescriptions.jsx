import "../Styles/CategoryDescriptions.css";
import { useState } from 'react';
import JSDescription from "./JSDescription";
import HTMLDescription from "./HTMLDescription";
import CSSDescription from "./CSSDescription";
import SQLDescription from "./SQLDescription";
import WebDevDescription from "./WebDevDescription";
import TInterviewDescription from "./TInterviewDescription";
import BInterviewDescription from "./BInterview";

function CategoryDescriptions() {
    const [currentCategory, setCurrentCategory] = useState("JavaScript");

  return (
    <div className="CategoryDescriptions" id="CategoryDescriptions">

        <div className="home-category-buttons">
            <div onClick={() => setCurrentCategory("JavaScript")} style={currentCategory == "JavaScript" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">JavaScript</div>
            <div onClick={() => setCurrentCategory("HTML")} style={currentCategory == "HTML" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">HTML</div>
            <div onClick={() => setCurrentCategory("CSS")} style={currentCategory == "CSS" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">CSS</div>
            <div onClick={() => setCurrentCategory("SQL")} style={currentCategory == "SQL" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">SQL</div>
            <div onClick={() => setCurrentCategory("Web Development")} style={currentCategory == "Web Development" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">Web Development</div>
            <div onClick={() => setCurrentCategory("Technical Interview Prep")} style={currentCategory == "Technical Interview Prep" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">Technical Interview Prep</div>
            <div onClick={() => setCurrentCategory("Behavioral Interview Prep")} style={currentCategory == "Behavioral Interview Prep" ? {color: "black", borderBottom: "2px solid black"} : null} className="home-category-button">Behavioral Interview Prep</div>
        </div>
        
        { currentCategory == "JavaScript" ? 
            <JSDescription/>
        : currentCategory == "HTML" ? 
            <HTMLDescription/>
        : currentCategory == "CSS" ? 
            <CSSDescription/>
        : currentCategory == "SQL" ? 
            <SQLDescription/>
        : currentCategory == "Web Development" ? 
            <WebDevDescription/>
        : currentCategory == "Technical Interview Prep" ? 
            <TInterviewDescription/>
        : currentCategory == "Behavioral Interview Prep" ? 
            <BInterviewDescription/>
        : null }
    </div>
  )
}

export default CategoryDescriptions;