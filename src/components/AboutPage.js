// src/components/AboutPage.js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="container about-page vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center text-md-start text-center about-info">
          <h1 className="display-4 mb-4">About Me</h1>
          <p className="lead mb-4">
            I am Aidan Day, a software engineer with a passion for building high-quality, scalable systems. I am an effective collaborator, able to work well in team environments and communicate effectively with both technical and non-technical stakeholders.
          </p>
          <p className="lead mb-4">
            In my free time, I enjoy staying up to date with the latest developments in cloud architecture and exploring new technologies in this space.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="about-image-container">
            <img src="/path/to/your-photo.jpg" alt="Aidan Day" className="img-fluid rounded-circle shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
