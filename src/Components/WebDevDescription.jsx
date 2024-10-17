import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import jsdotcom from "../assets/jsdotcom.png";
import javascriptfcc from "../assets/javascriptfcc.png";

function WebDevDescription() {
  return (
    <div className="home-category-descriptions">

        <div className="home-category-description">
            <div className="home-why-header">What is Web Developement?</div>
            <div className="home-why-content">JavaScript (JS) is a widely-used programming language essential for web development, enabling interactivity on websites. It allows developers to create dynamic content like animations, form validations, and real-time updates without needing to reload a page. As one of the core technologies alongside HTML and CSS, JavaScript enhances user experiences, making websites more engaging. Beyond the browser, JavaScript is also used in server-side development with environments like Node.js. Learning JavaScript is crucial for anyone interested in web development, as it’s versatile, in-demand, and foundational for building modern, interactive applications.</div>
            <div className="home-how-header">How do you learn Web Development?</div>
            <div className="home-how-content">
                <Link className="home-how-answer" to="/mentee-signup">
                    <img src={logo2} alt="" />
                    <div className="how-answer-text">
                        Create an account<br/>
                        <span>Start your journey</span>
                    </div>
                </Link>
                <Link className="home-how-answer" to="https://www.javascript.com" target="_blank">
                    <img src={jsdotcom} alt=""  style={{padding: "5px", objectFit: "contain"}}/>
                    <div className="how-answer-text">
                        JavaScript.com<br/>
                        <span>Learn more about JavaScript</span>
                    </div>
                </Link>
                <Link className="home-how-answer" to="https://www.freecodecamp.org/news/full-javascript-course-for-beginners/" target="_blank">
                    <img src={javascriptfcc} alt="" />
                    <div className="how-answer-text">
                        freeCodeCamp.org<br/>
                        <span>JavaScript Course for Beginners</span>
                    </div>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default WebDevDescription