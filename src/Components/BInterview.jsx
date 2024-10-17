import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import techinterviewhandbook from '../assets/technicalinterview.svg';
import indeed from '../assets/indeed.png';
function BInterviewDescription() {
  return (
    <div className='home-category-descriptions'>
      <div className='home-category-description'>
        <div className='home-why-header'>
          What is a Behavioral Interview?
        </div>
        <div className='home-why-content'>
          A behavioral interview is a type of interview that focuses on how candidates have handled specific situations in the past. Employers use this method to assess a candidate's problem-solving skills, teamwork, and ability to handle stress. By asking about real-life experiences, interviewers can gain insights into a candidate's behavior and predict future performance in similar situations.
        </div>
        <div className='home-how-header'>How do you Prepare?</div>
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
            to='https://www.techinterviewhandbook.org/behavioral-interview/'
            target='_blank'
          >
            <img
              src={techinterviewhandbook}
              alt='Tech Interview Handbook'
              style={{
                padding: '5px',
                objectFit: 'contain',
                backgroundColor: 'transparent',
              }}
            />
            <div className='how-answer-text'>
              Behavioral Interviews
              <br />
              <span> Handbook for Software Engineers </span>
            </div>
          </Link>
          <Link
            className='home-how-answer'
            to='https://www.indeed.com/career-advice/interviewing/how-to-prepare-for-a-behavioral-interview'
            target='_blank'
          >
            <img
              src={indeed}
              alt='Indeed'
              style={{
                padding: '5px',
                objectFit: 'contain',
                backgroundColor: 'transparent',
              }}
            />
            <div className='how-answer-text'>
              Indeed Career Guide
              <br />
              <span>How to Prepare for Behavioral Interviews</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BInterviewDescription;
