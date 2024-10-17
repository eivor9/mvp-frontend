import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import sqltutorial from '../assets/sqltutorial.svg';
import w3schools from '../assets/w3schools.png';

function SQLDescription() {
  return (
    <div className='home-category-descriptions'>
      <div className='home-category-description'>
        <div className='home-why-header'>What is SQL?</div>
        <div className='home-why-content'>
          SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It allows developers to perform operations such as querying data, updating records, and managing database structures. SQL is essential for data analysis and is widely used in various applications, making it a fundamental skill for anyone working with data.
        </div>
        <div className='home-how-header'>How do you learn SQL?</div>
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
            to='https://www.w3schools.com/sql/'
            target='_blank'
          >
            <img
              src={w3schools}
              alt='W3Schools SQL'
              style={{
                objectFit: 'contain',
                padding: '5px',
                backgroundColor: 'white',
              }}
            />
            <div className='how-answer-text'>
              W3Schools SQL
              <br />
              <span>Learn SQL basics</span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://www.sqltutorial.org/'
            target='_blank'
          >
            <img
              src={sqltutorial}
              alt='SQL Tutorial'
              style={{
                objectFit: 'contain',
                padding: '5px',
                backgroundColor: 'white',
              }}
            />
            <div className='how-answer-text'>
              SQL Tutorial
              <br />
              <span>Comprehensive SQL guide</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SQLDescription;
