import React, { useState, useEffect } from 'react';
import profilePic from '../public/imgs/profile2.jpg';
import './HomePage.css';
import ExperienceSection from './ExperienceSection';
import ContactPage from './ContactPage';

const HomePage = () => {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(false);

  // Sequence: name → description → image+CTAs
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2000);
    const t2 = setTimeout(() => setStage(2), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, { threshold: 0.2 }
    );
    const elem = document.getElementById('hero');
    if (elem) observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="hero"
        className={`homepage fade-in-section ${visible ? 'is-visible' : ''}`}
      >
        <div className="overlay" />
        <div className="hero-content">
          <h1 className={`name-text ${stage < 1 ? 'expand' : 'shrink'}`}>Welcome!</h1>

          {stage >= 1 && (
            <>
              <div className="actions-container transition" style={{ transitionDelay: '1600ms' }}>
                <div className="profile-frame">
                  <img src={profilePic} alt="Aidan Day" />
                </div>
              </div>
            </>

          )}

          {stage >= 2 && (
            <>
              <p className="lead description transition" style={{ transitionDelay: '600ms' }}>
              I am Aidan, a software engineer with a passion for building high-quality, scalable systems. I love working with people of both technical and non-technical backgrounds. In my free time, I enjoy staying up to date with the latest developments in cloud architecture and exploring new technologies in this space.
              </p>
              <div className="cta-buttons">
                <a href="#experience" className="btn btn-primary btn-lg mb-1">View Experience</a>
                <a href="/contact" className="btn btn-outline-light btn-lg mb-1">Get in Touch</a>
              </div>
            </>

          )}
        </div>
      </section>

      <ExperienceSection />
      <ContactPage />
    </>
  );
};

export default HomePage;