import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import w3schools from '../assets/w3schools.png';
import mdnwebdocs from '../assets/mdnwebdocs.png';

function HTMLDescription() {
  return (
    <div className='home-category-descriptions'>
      <div className='home-category-description'>
        <div className='home-why-header'> What is HTML? </div>
        <div className='home-why-content'>
          HTML (HyperText Markup Language) is the standard language
          for creating web pages. It structures content on the web,
          allowing developers to define elements like headings,
          paragraphs, links, and images. HTML is essential for web
          development, serving as the backbone for all websites and
          enabling the integration of CSS and JavaScript for enhanced
          functionality.
        </div>
        <div className='home-how-header'>How do you learn HTML?</div>
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
            to='https://www.w3schools.com/html/'
            target='_blank'
          >
            <img
              src={w3schools}
              alt='W3Schools Logo'
              style={{
                objectFit: 'contain',
                padding: '5px',
                backgroundColor: 'transparent',
              }}
            />
            <div className='how-answer-text'>
              W3Schools HTML
              <br />
              <span>Learn HTML basics</span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://developer.mozilla.org/en-US/docs/Web/HTML'
            target='_blank'
          >
            <img
              src={mdnwebdocs}
              alt='MDN Web Docs Logo'
              style={{
                objectFit: 'contain',
                padding: '5px',
                backgroundColor: 'transparent',
              }}
            />
            <div className='how-answer-text'>
              MDN Web Docs
              <br />
              <span>Comprehensive HTML guide</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HTMLDescription;
