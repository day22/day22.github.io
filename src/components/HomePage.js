import React, { useRef, useEffect, useState } from 'react';
import profilePic from '../public/imgs/profile2.jpg';
import './HomePage.css';
import ExperienceSection from './ExperienceSection';
import ContactPage from './ContactPage';

const HomePage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sectionRef} className={`container-fluid homepage fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="overlay"></div>
        <div className="container vh-100 d-flex align-items-center position-relative">
          <div className="row w-100">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="profile-frame">
                <img src={profilePic} alt="Aidan Day" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-3 name-text mb-3">Aidan Day</h1>
              <p className="lead paragraph-text">
                I am a software engineer with a passion for building high-quality, scalable systems. I thrive in collaborative environments and communicate effectively across technical and non-technical teams. In my free time, I explore new cloud architectures and emerging technologies.
              </p>  
              <div className="mt-4">
                <a href="#experience" className="btn btn-primary btn-lg me-3">View Experience</a>
                <a href="/contact" className="btn btn-outline-light btn-lg">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExperienceSection />
      <ContactPage />
    </>
  );
};

export default HomePage;
