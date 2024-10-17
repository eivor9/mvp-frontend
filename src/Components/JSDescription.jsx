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
          JavaScript (JS) is a key programming language for web
          development, enabling interactivity and dynamic content like
          animations and real-time updates. It works alongside HTML
          and CSS to enhance user experiences. JavaScript is also used
          in server-side development with Node.js, making it essential
          for anyone interested in modern web applications.
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
