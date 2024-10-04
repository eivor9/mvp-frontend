// Components/Hero.jsx

// import React from "react";
// import "../Styles/Hero.css";

// const Hero = () => {
//   return (
//     <div>
//       <img
//         src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2F1x1.png%3Fmark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26h%3D630%26w%3D1200%26blend%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1561346745-5db62ae43861%253Fcrop%253Dfaces%25252Cedges%2526h%253D630%2526w%253D1200%2526blend%253D000000%2526blend-mode%253Dnormal%2526blend-alpha%253D10%2526mark-w%253D750%2526mark-align%253Dmiddle%25252Ccenter%2526mark%253Dhttps%25253A%25252F%25252Fimages.unsplash.com%25252Fopengraph%25252Fsearch-input.png%25253Fw%25253D750%252526h%25253D84%252526txt%25253Dmentorship%252526txt-pad%25253D80%252526txt-align%25253Dmiddle%2525252Cleft%252526txt-color%25253D%25252523000000%252526txt-size%25253D40%252526txt-width%25253D660%252526txt-clip%25253Dellipsis%252526auto%25253Dformat%252526fit%25253Dcrop%252526q%25253D60%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%2526ixid%253DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWVudG9yc2hpcHxlbnwwfHx8fDE3Mjc1MDM1MDJ8MA%2526ixlib%253Drb-4.0.3%26blend-w%3D1%26auto%3Dformat%26fit%3Dcrop%26q%3D60"
//         alt="mentor and mentee working together"
//       />
//       <h5>Some text</h5>
//       <h1>Some more text</h1>
//       <span>
//         <button>button 1</button> <button>button2</button>
//       </span>
//     </div>
//   );
// };

import React from "react";
import "../Styles/Hero.css"; // Import the CSS file
import defaultProfile from "../assets/default.jpeg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-img-filter"></div>
        <span className="image-container">
          <img
            src="https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="mentor and mentee working together"
          />
          {/* <div className="hero-small-text">Music</div>
          <div className="hero-large-text">Intruments</div> */}
          {/* <div className="button-container">
            <button className="button">button 1</button>
            <button className="button">button 2</button>
          </div> */}
        </span>
      </div>

      <div className="connection-contact">

        <div className="hero-profile">
          <img src={defaultProfile} alt="" />
          <div className="hero-profile-info">
            <div className="hero-profile-name">John Doe</div>
            <div className="hero-profile-job">Web Developer</div>
          </div>
        </div>

        <div className="hero-contact">
          <div className="hero-contact-cal">Calender</div>
          <div className="hero-contact-message">Message</div>
          <div className="hero-contact-call">Zoom</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
