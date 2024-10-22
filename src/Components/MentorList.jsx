import "../Styles/MentorList.css";
import { useState, useEffect } from "react";
import CurrentMentor from "./CurrentMentor";

function MentorList({ user, token, setShowMentorList, connections }) {

    const [currentMentor, setCurrentMentor] = useState("No mentor set");
    const [currentSkillId, setCurrentSkillId] = useState(1);
    const [mentors, setMentors] = useState([]);
    const [mentees, setMentees] = useState([]);
    const skills = { 1 : "JavaScript", 2 : "HTML", 3 : "CSS", 4 : "SQL", 5 : "Web Development", 6 : "Technnical Interview Prep", 7 : "Behavioral Interview Prep" };

  const API = import.meta.env.VITE_BASE_URL;

    // const mentors = [
    //     {
    //       "id": 1,
    //       "name": "Emma Hartman",
    //       "job_title": "Software Engineer",
    //       "bio": "Emma is a dedicated software engineer with over five years of experience in full-stack development. Proficient in JavaScript, Python, and cloud services like AWS, she excels at building scalable web applications. Emma has led cross-functional teams and delivered projects on time, with a focus on user experience and clean code. She thrives in agile environments and is passionate about continuous learning and problem-solving. In her most recent role, she implemented a microservices architecture that improved system efficiency by 30%, contributing to overall business growth.",
    //       "backgroundColor": "linear-gradient(0deg,rgba(252,201,59,1)0%,rgba(252,201,5,0.6)100%)"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Lucas Rivera",
    //       "job_title": "Marketing Specialist",
    //       "bio": "Lucas is a results-oriented marketing specialist with a proven track record in digital marketing and brand management. With a keen eye for consumer trends, he has successfully managed multi-channel campaigns, increasing brand awareness and customer engagement. Lucas specializes in SEO, email marketing, and social media strategy, helping businesses maximize their online presence. His experience spans both startups and established firms, where he has driven marketing initiatives that resulted in significant sales growth. Known for his creative thinking and data-driven approach, Lucas is always looking for innovative ways to meet client goals.",
    //       "backgroundColor": "linear-gradient(0deg,rgba(253,87,77,1)0%,rgba(253,87,77,0.6)100%)"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Grace Thompson",
    //       "job_title": "Graphic Designer",
    //       "bio": "Grace is a talented graphic designer with over six years of experience in creating visually appealing designs for print and digital media. She has worked with various clients, including e-commerce companies, nonprofits, and tech startups. Grace’s expertise lies in logo design, branding, and UX/UI design. Her design philosophy focuses on simplicity, clarity, and user-centered aesthetics. She has a strong proficiency in Adobe Creative Suite and Figma, and she consistently delivers high-quality designs under tight deadlines. Grace is passionate about storytelling through design and aims to create meaningful visual experiences.",
    //       "backgroundColor": "linear-gradient(0deg,rgba(112,205,248,1)0%,rgba(112,205,248,0.6)100%)"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Noah Patel",
    //       "job_title": "Product Manager",
    //       "bio": "Noah is a seasoned product manager with a background in both technical and business domains. Over the past seven years, he has successfully managed the lifecycle of numerous digital products, from concept to launch. Noah has a deep understanding of market research, user needs, and business strategy, which allows him to build products that resonate with customers. He is adept at leading cross-functional teams and excels at stakeholder communication. In his previous role, Noah managed a SaaS platform that grew revenue by 25% through strategic feature releases and data-driven improvements.",
    //       "backgroundColor": "linear-gradient(0deg,rgba(177,177,177,0.9)0%,rgba(180,180,180,0.4)100%)"
    //     }
    //   ]

      const userInitials = (input) => {
        if (!input) return "?";

        let initials = "";
        const userNames = input.split(" ");

        for (const name of userNames){
            initials += name[0];
        }

        return initials;
    }

    if(user.is_mentor){
      useEffect(() => {
        fetch(`${API}/users/${user.id}/mentees`)
        .then(res => res.json())
        .then(res =>{
          setMentees(res)
        })
        .catch(err => {
          console.error(err)
        })
      },[])
    } else {
      useEffect(() => {
        fetch(`${API}/users/mentors/${currentSkillId}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if(connections.length){
            const mentorIds = connections.map(connection => connection.mentor_id)
            setMentors(res.filter(mentor => !mentorIds.includes(mentor.id)));
          } else {
            setMentors(res)
          }
        })
      }, [currentSkillId, connections])
    }
    

    

  return (
    <div className="MentorList">
        <div onClick={() => setShowMentorList(false)} className="mentor-list-background"></div>
        <div className="mentor-list-container">
            {currentMentor.id ? 
                <CurrentMentor user={user} token={token} currentMentor={currentMentor} setCurrentMentor={setCurrentMentor} currentSkillId={currentSkillId}/>
            : <>
                <div className="mentor-list-header">{user.is_mentor ? "Pending Connections" : "Available Mentors"}</div>
                {!user.is_mentor ?
                <div className="mentor-list-skills">
                    Skills
                    <select name="skillId" id="" value={currentSkillId} onChange={(e)=>setCurrentSkillId(e.target.value)}>
                        <option value={1}>JavaScript</option>
                        <option value={2}>HTML</option>
                        <option value={3}>CSS</option>
                        <option value={4}>SQL</option>
                        <option value={5}>Web Developement</option>
                        <option value={6}>Technical Interview Prep</option>
                        <option value={7}>Behavioral Interview Prep</option>
                    </select>
                </div>
                : null}

                <div className="mentor-list">
                    <div className="mentor-list-title">{user.is_mentor ? "Mentees" : "Mentors"}</div>
                      {user.is_mentor ?
                        mentees.filter(x => x.status == "pending").map(mentor => 
                            <div key={mentor.id} className="mentor-list-mentor" onClick={() => setCurrentMentor(mentor)}>
                                <div style={{background:mentor.background_color}} className="mentor-list-pic">{userInitials(mentor.name)}</div>
                                <div className="mentor-list-info">{mentor.name}<span>{skills[mentor.skill_id]}</span></div>
                            </div>
                        )
                        :
                        mentors.map(mentor => 
                          <div key={mentor.id} className="mentor-list-mentor" onClick={() => setCurrentMentor(mentor)}>
                              <div style={{background:mentor.background_color}} className="mentor-list-pic">{userInitials(mentor.name)}</div>
                              <div className="mentor-list-info">{mentor.name}<span>{mentor.job_title}</span></div>
                          </div>
                        )
                      }
                </div>
            </>}

        </div>
    </div>
  )
}

export default MentorList