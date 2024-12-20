import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import techinterviewhandbook from "../assets/technicalinterview.svg";
import leetcode from "../assets/leetcode.png";

function TInterviewDescription() {
  return (
    <div className="home-category-descriptions">

        <div className="home-category-description">
            <div className="home-why-header">What is a Technical Interview?</div>
            <div className="home-why-content">Technical interviews evaluate a candidate’s coding skills, problem-solving abilities, and knowledge of algorithms and data structures. Often featuring live coding challenges, they assess a candidate’s logical thinking and communication under pressure. Preparation includes practicing key topics, understanding concepts, and articulating solutions clearly. These interviews help determine suitability for engineering roles, emphasizing both technical knowledge and analytical skills.</div>
            <div className="home-how-header">How do you Prepare?</div>
            <div className="home-how-content">
                <Link className="home-how-answer" to="/mentee-signup">
                    <img src={logo2} alt="" />
                    <div className="how-answer-text">
                        Create an account<br/>
                        <span>Start your journey</span>
                    </div>
                </Link>
                <Link className="home-how-answer" to="https://www.techinterviewhandbook.org/" target="_blank">
                    <img src={techinterviewhandbook} alt="Tech Interview Handbook" style={{padding: "5px", objectFit: "contain", backgroundColor: "transparent"}}/>
                    <div className="how-answer-text">
                        Technical Interview Handbook <br/>
                        <span> Behavioral interviews for Software Engineers: How to prepare </span>
                    </div>
                </Link>
                <Link className="home-how-answer" to="https://leetcode.com/" target="_blank">
                    <img src={leetcode} alt="LeetCode" style={{padding: "5px", objectFit: "contain", backgroundColor: "transparent"}}/>
                    <div className="how-answer-text">
                        LeetCode<br/>
                        <span> Practice coding problems for interviews</span>
                    </div>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default TInterviewDescription
