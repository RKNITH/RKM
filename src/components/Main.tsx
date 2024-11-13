import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">

        <div className="content">

          <h1>Raviranjan kumar</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="#" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="#" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;