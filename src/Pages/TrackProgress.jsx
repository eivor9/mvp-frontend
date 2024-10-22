import { useState } from 'react'
import "../Styles/TrackProgress.css";
import zoom from "../assets/zoom.png";
import linkedin from "../assets/linkedin.png";
import { Link } from 'react-router-dom';

function TrackProgress() {
    const [firstBanner, setFirstBanner] = useState(true);
    const [currentMetric, setCurrentMetric] = useState("1");
    const [showAssingment, setShowAssingment] = useState(false);
    const [showAssingmentForm, setShowAssingmentForm] = useState(false);

  return (
    <div className="TrackProgress">
        <div onClick={() => setFirstBanner(!firstBanner)} className="banner-prev-button"><i className="fa-solid fa-chevron-left"></i></div>
        <div onClick={() => setFirstBanner(!firstBanner)} className="banner-next-button"><i className="fa-solid fa-chevron-right"></i></div>
        <Link style={{right: firstBanner ? "1070px" : "1010px"}} className="progress-linkedin">{firstBanner ? <>Linked<i className="fa-brands fa-linkedin"></i></> : <>Join the meeting</>}</Link>

        {showAssingment ? 
            <div className="MentorList">
                <div onClick={() => setShowAssingment(false)} className="mentor-list-background"></div>
                <div className="mentor-list-container">
                    <div className="progress-assingment-display">
                        <div className="progress-assingment-name">Loops and Iteration</div>
                        <div className="progress-assignment-metric">Control Flow and Functions</div>
                        <div className="progress-assignment-body-header">Body</div>
                        <div className="progress-assignment-body">Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history. Abraham Lincoln, the 16th president of the United States, is renowned for his leadership during the American Civil War and his commitment to preserving the Union. Born in 1809 in a Kentucky log cabin, Lincoln rose from humble beginnings to become one of America's most revered leaders. His dedication to ending slavery culminated in the Emancipation Proclamation of 1863, which declared freedom for slaves in Confederate-held territory. Lincoln's eloquence, as seen in the Gettysburg Address, and his vision for national unity left a lasting legacy. Tragically, he was assassinated in 1865, shortly after the Civil War ended, leaving an indelible mark on U.S. history.</div>
                        <div className="completed-button"><i className="fa-regular fa-circle-check"></i></div>
                        <div className="assignment-date">Nov<span>22</span></div>
                    </div>
                </div>
            </div>
        :null}

        {showAssingmentForm ? 
            <div className="MentorList">
                <div onClick={() => setShowAssingmentForm(false)} className="mentor-list-background"></div>
                <div className="mentor-list-container">
                    <form className="new-assignment-form">
                        <label htmlFor="due_date">Due Date <input type="date" id="due_date"/></label>
                        <label htmlFor="name">Name <input id="name" type="text"/></label>
                        <label htmlFor="body">Body <textarea  id="body"></textarea></label>
                        <button className='create-assignment-button' type="submit">+</button>
                    </form>
                </div>
            </div>
        :null}

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
                <div className="progress-assignment" onClick={() => setShowAssingmentForm(true)}>
                    <div className="progress-assignment-name">Create New Assignment</div>
                    <div className="progress-assignment-date"></div>
                </div>

                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>

                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>

                <div className="progress-assignment" onClick={() => setShowAssingment(true)}>
                    <div className="progress-assignment-name">Loops and Iteration</div>
                    <div className="progress-assignment-date">11-22-2024</div>
                </div>
                
            </div>
        
        </div>
    </div>
  )
}

export default TrackProgress;