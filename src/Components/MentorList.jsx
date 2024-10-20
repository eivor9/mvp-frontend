import "../Styles/MentorList.css";
import { useState } from "react";
import CurrentMentor from "./CurrentMentor";

function MentorList({ setShowMentorList }) {
    const [currentMentor, setCurrentMentor] = useState("No mentor set");

    const mentors = [
        {
          "id": 1,
          "name": "Emma Hartman",
          "job_title": "Software Engineer",
          "bio": "Emma is a dedicated software engineer with over five years of experience in full-stack development. Proficient in JavaScript, Python, and cloud services like AWS, she excels at building scalable web applications. Emma has led cross-functional teams and delivered projects on time, with a focus on user experience and clean code. She thrives in agile environments and is passionate about continuous learning and problem-solving. In her most recent role, she implemented a microservices architecture that improved system efficiency by 30%, contributing to overall business growth.",
          "backgroundColor": "linear-gradient(0deg,rgba(252,201,59,1)0%,rgba(252,201,5,0.6)100%)"
        },
        {
          "id": 2,
          "name": "Lucas Rivera",
          "job_title": "Marketing Specialist",
          "bio": "Lucas is a results-oriented marketing specialist with a proven track record in digital marketing and brand management. With a keen eye for consumer trends, he has successfully managed multi-channel campaigns, increasing brand awareness and customer engagement. Lucas specializes in SEO, email marketing, and social media strategy, helping businesses maximize their online presence. His experience spans both startups and established firms, where he has driven marketing initiatives that resulted in significant sales growth. Known for his creative thinking and data-driven approach, Lucas is always looking for innovative ways to meet client goals.",
          "backgroundColor": "linear-gradient(0deg,rgba(253,87,77,1)0%,rgba(253,87,77,0.6)100%)"
        },
        {
          "id": 3,
          "name": "Grace Thompson",
          "job_title": "Graphic Designer",
          "bio": "Grace is a talented graphic designer with over six years of experience in creating visually appealing designs for print and digital media. She has worked with various clients, including e-commerce companies, nonprofits, and tech startups. Grace’s expertise lies in logo design, branding, and UX/UI design. Her design philosophy focuses on simplicity, clarity, and user-centered aesthetics. She has a strong proficiency in Adobe Creative Suite and Figma, and she consistently delivers high-quality designs under tight deadlines. Grace is passionate about storytelling through design and aims to create meaningful visual experiences.",
          "backgroundColor": "linear-gradient(0deg,rgba(112,205,248,1)0%,rgba(112,205,248,0.6)100%)"
        },
        {
          "id": 4,
          "name": "Noah Patel",
          "job_title": "Product Manager",
          "bio": "Noah is a seasoned product manager with a background in both technical and business domains. Over the past seven years, he has successfully managed the lifecycle of numerous digital products, from concept to launch. Noah has a deep understanding of market research, user needs, and business strategy, which allows him to build products that resonate with customers. He is adept at leading cross-functional teams and excels at stakeholder communication. In his previous role, Noah managed a SaaS platform that grew revenue by 25% through strategic feature releases and data-driven improvements.",
          "backgroundColor": "linear-gradient(0deg,rgba(177,177,177,0.9)0%,rgba(180,180,180,0.4)100%)"
        },
        {
          "id": 5,
          "name": "Olivia E. Sanders",
          "job_title": "Data Analyst",
          "bio": "Olivia is an analytical and detail-oriented data analyst with four years of experience in data visualization and statistical analysis. She is skilled in SQL, Python, and Tableau, and has worked with large datasets to uncover actionable insights for businesses. Olivia has experience collaborating with cross-functional teams to optimize performance through data-driven decision-making. In her last role, she developed a forecasting model that improved supply chain efficiency by 15%. Olivia is passionate about using data to solve complex problems and drive business success, and she continually seeks to expand her knowledge in the field.",
          "backgroundColor": "linear-gradient(0deg,rgba(163,138,245,1)0%,rgba(163,138,245,0.6)100%)"
        }
      ]

      const userInitials = (input) => {
        if (!input) return "?";

        let initials = "";
        const userNames = input.split(" ");

        for (const name of userNames){
            initials += name[0];
        }

        return initials;
    }

  return (
    <div className="MentorList">
        <div onClick={() => setShowMentorList(false)} className="mentor-list-background"></div>
        <div className="mentor-list-container">
            {currentMentor.id ? 
                <CurrentMentor mentor={currentMentor} setCurrentMentor={setCurrentMentor}/>
            : <>
                <div className="mentor-list-header">Available Mentors</div>
                <div className="mentor-list-skills">
                    Skills
                    <select name="" id="">
                        <option value="">JavaScript</option>
                        <option value="">HTML</option>
                        <option value="">CSS</option>
                        <option value="">SQL</option>
                        <option value="">Web Developement</option>
                        <option value="">Technical Interview Prep</option>
                        <option value="">Behavioral Interview Prep</option>
                    </select>
                </div>

                <div className="mentor-list">
                    <div className="mentor-list-title">Mentors</div>
                    {mentors.map(mentor => 
                        <div key={mentor.id} className="mentor-list-mentor" onClick={() => setCurrentMentor(mentor)}>
                            <div style={{background:mentor.backgroundColor}} className="mentor-list-pic">{userInitials(mentor.name)}</div>
                            <div className="mentor-list-info">{mentor.name}<span>{mentor.job_title}</span></div>
                        </div>
                    )}
                </div>
            </>}

        </div>
    </div>
  )
}

export default MentorList