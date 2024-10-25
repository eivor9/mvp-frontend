import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import codecademy from '../assets/codecademy.png';
import udemy from '../assets/udemy.png';

function WebDevDescription() {
  return (
    <div className='home-category-descriptions'>
      <div className='home-category-description'>
        <div className='home-why-header'>
          What is Web Developement?
        </div>
        <div className='home-why-content'>
        Web development involves creating and maintaining websites and web applications, combining technical and creative skills to build functional, user-friendly digital experiences. It includes frontend development, where HTML, CSS, and JavaScript structure and style the user interface, and backend development, which handles server logic, databases, and APIs. Effective web development results in responsive, accessible, and interactive platforms, enhancing user engagement across various devices and browsers.
        </div>
        <div className='home-how-header'>
          How do you learn Web Development?
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
            to='https://www.codecademy.com/learn/paths/web-development'
            target='_blank'
          >
            <img
              src={codecademy}
              alt='Codecademy'
              style={{
                objectFit: 'contain',
                backgroundColor: 'transparent',
                padding: '5px',
              }}
            />
            <div className='how-answer-text'>
              Codecademy
              <br />
              <span>Learn Web Development Basics</span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://www.udemy.com/courses/search/?q=web%20development'
            target='_blank'
          >
            <img
              src={udemy}
              alt='Udemy'
              style={{
                objectFit: 'contain',
                backgroundColor: 'white',
                padding: '5px',
              }}
            />
            <div className='how-answer-text'>
              Udemy
              <br />
              <span>Explore Web Development Courses</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WebDevDescription;
