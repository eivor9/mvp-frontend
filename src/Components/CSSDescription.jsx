import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import w3schools from '../assets/w3schools.png';
import mdnwebdocs from '../assets/mdnwebdocs.png';

function CSSDescription() {
  return (
    <div className='home-category-descriptions'>
      <div className='home-category-description'>
        <div className='home-why-header'>What is CSS?</div>
        <div className='home-why-content'>
          CSS (Cascading Style Sheets) is a stylesheet language used
          to control the presentation of web pages. It allows
          developers to apply styles, such as colors, fonts, and
          layouts, to HTML elements. CSS enhances the visual appeal of
          websites and is essential for responsive design, ensuring
          that web pages look good on various devices.
        </div>
        <div className='home-how-header'>How do you learn CSS?</div>
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
            to='https://www.w3schools.com/css/'
            target='_blank'
          >
            <img
              src={w3schools}
              alt='W3Schools CSS'
              style={{
                objectFit: 'contain',
                padding: '5px',
                backgroundColor: 'transparent',
              }}
            />
            <div className='how-answer-text'>
              W3Schools CSS
              <br />
              <span>Learn CSS basics</span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://developer.mozilla.org/en-US/docs/Web/CSS'
            target='_blank'
          >
            <img
              src={mdnwebdocs}
              alt='MDN Web Docs CSS'
              style={{
                objectFit: 'contain',
                padding: '5px',
                backgroundColor: 'transparent',
              }}
            />
            <div className='how-answer-text'>
              MDN Web Docs
              <br />
              <span>Comprehensive CSS guide</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CSSDescription;
