// Components/FAQ.jsx

import React, { useState } from 'react';
import "../Styles/FAQ.css";

const FAQ = () => {

  const [showQuestionOne, toggleQuestionOne] = useState(false);
  const [showQuestionTwo, toggleQuestionTwo] = useState(false);
  const [showQuestionThree, toggleQuestionThree] = useState(false);
  const [showQuestionFour, toggleQuestionFour] = useState(false);
  const [showQuestionFive, toggleQuestionFive] = useState(false);

  const hideAllAnswers = () => {
    toggleQuestionOne(false);
    toggleQuestionTwo(false);
    toggleQuestionThree(false);
    toggleQuestionFour(false);
    toggleQuestionFive(false);
  }

  return (
    <div className="faq-container">

      <div className="faq-header">Before you get started...</div>

      <div className="faq">
        <div className="faq-question" onClick={() => {hideAllAnswers(); toggleQuestionOne(!showQuestionOne)}}>How does the platform work?</div>
        {showQuestionOne ? <div className="faq-answer">After signing up, mentees can browse through our mentor database, filtering by expertise, industry, or interests. Once you’ve found a potential mentor, you can send a request. Mentors and mentees communicate through built-in messaging, video calls, or scheduled sessions, with tools to track progress and set goals.</div> : null}
      </div>

      <div className="faq">
        <div className="faq-question" onClick={() => {hideAllAnswers(); toggleQuestionTwo(!showQuestionTwo)}}>How do I become a mentee?</div>
        {showQuestionTwo ? <div className="faq-answer">Simply sign up on our platform, complete your profile with your goals and interests, and start browsing our network of mentors. You can connect with mentors who specialize in areas you're looking to grow, whether that's career advancement, skill development, or personal growth.</div> : null}
      </div>

      <div className="faq">
        <div className="faq-question" onClick={() => {hideAllAnswers(); toggleQuestionThree(!showQuestionThree)}}>How do I find the right mentor for me?</div>
        {showQuestionThree ? <div className="faq-answer">Our platform includes filters based on industry, skills, experience, and availability, helping you find the best match. Additionally, each mentor profile includes reviews, ratings, and a detailed biography to give you a clearer picture of their approach and expertise.</div> : null}
      </div>

      <div className="faq">
        <div className="faq-question" onClick={() => {hideAllAnswers(); toggleQuestionFour(!showQuestionFour)}}>How long do mentorship relationships last?</div>
        {showQuestionFour ? <div className="faq-answer">Mentorship relationships can last as long as needed. Some mentorships are short-term for specific projects or goals, while others can be long-term, depending on the needs of the mentee and the availability of the mentor.</div> : null}
      </div>

      <div className="faq">
        <div className="faq-question" onClick={() => {hideAllAnswers(); toggleQuestionFive(!showQuestionFive)}}>Can I mentor and be a mentee at the same time?</div>
        {showQuestionFive ? <div className="faq-answer">Absolutely! Many users on our platform serve as both mentors and mentees, depending on their expertise in certain areas and their desire to learn in others.</div> : null}
      </div>

    </div>
  );
};

export default FAQ;
