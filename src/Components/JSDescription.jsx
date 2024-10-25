import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import jsdotcom from '../assets/jsdotcom.png';
import javascriptfcc from '../assets/javascriptfcc.png';

function JSDescription() {
  return (
    <div className='home-category-descriptions'>
      <div className='home-category-description'>
        <div className='home-why-header'>What is JavaScript?</div>
        <div className='home-why-content'>
          JavaScript is a versatile, high-level programming language primarily used to add interactivity to web pages. Running in web browsers, it enables dynamic content changes, animations, and form handling. JavaScript also powers servers via Node.js, supports asynchronous programming, and integrates well with HTML and CSS for full-stack web development.
        </div>
        <div className='home-how-header'>
          How do you learn JavaScript?
        </div>
        <div className='home-how-content'>
          <Link className='home-how-answer' to='/mentee-signup'>
            <img src={logo2} alt='' />
            <div className='how-answer-text'>
              Create an account
              <br />
              <span>Start your journey</span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://www.javascript.com'
            target='_blank'
          >
            <img
              src={jsdotcom}
              alt=''
              style={{ padding: '5px', objectFit: 'contain' }}
            />
            <div className='how-answer-text'>
              JavaScript.com
              <br />
              <span>Learn more about JavaScript</span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://www.freecodecamp.org/
                news/full-javascript-course-for-beginners/'
            target='_blank'
          >
            <img src={javascriptfcc} alt='' />
            <div className='how-answer-text'>
              freeCodeCamp.org
              <br />
              <span>JavaScript Course for Beginners</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JSDescription;
