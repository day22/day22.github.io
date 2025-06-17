import React, { useRef, useEffect, useState } from 'react';
import './ExperienceSection.css';

import saifLogo from'../public/imgs/saif-logo.jpg'
import viewpointLogo from'../public/imgs/viewpoint_logo.jpg'

const ExperienceSection = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`experience-section py-5 bg-light fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <h2 className="section-title text-center mb-4">Experience</h2>
        <div className="card experience-card mx-auto shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex align-items-start">
              <img 
                src={saifLogo}
                alt='SAIF Corp Logo'
                className='experience-icon rounded-circle me-3'
              />
              <div>
                <h3 className="card-title mb-1">Software Development Engineer in Test Intern</h3>
                <p className="company mb-0">
                  <strong>Viewpoint, Trimble</strong> &middot; Full-time
                </p>
                <p className="dates-location text-muted">
                  May 2021 &ndash; Aug 2021 &middot; Portland, Oregon, United States
                </p>
              </div>
            </div>
            <ul className="mt-3 list-unstyled experience-list">
              <li>Automated managerial and developer processes utilizing Azure API within C# console applications.</li>
              <li>Caught human errors and increased efficiency by saving one hour before each RTM.</li>
              <li>Operated within an Agile scrum team using Git to integrate code into the complex code base.</li>
              <li>Overhauled project documentation with wikis and comments to ensure the project was reproducible and reusable.</li>
            </ul>
          </div>
        </div>
        <div className="card experience-card mx-auto shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-start">
              <img 
                src={viewpointLogo}
                alt='SAIF Corp Logo'
                className='experience-icon rounded-circle me-3'
              />
              <div>
                <h3 className="card-title mb-1">Software Development Engineer in Test II</h3>
                <p className="company mb-0">
                  <strong>SAIF Corporation</strong> &middot; Full-time
                </p>
                <p className="dates-location text-muted">
                  Jul 2022 &ndash; Present &middot; Portland, Oregon, United States
                </p>
              </div>
            </div>
            <ul className="mt-3 list-unstyled experience-list">
              <li>Developed and executed automated tests to cover APIs and UI components.</li>
              <li>Implemented AWS immutable infrastructures using Terraform to orchestrate test execution, resulting in faster and more reliable test runs.</li>
              <li>Collaborated with team members in an agile team to ensure comprehensive application coverage, resulting in higher quality releases and reduction in post-release issues.</li>
              <li>Developed and maintained Python testing frameworks using Unittest, Selenium, resulting in faster and more reliable test development and execution.</li>
              <li>Mentored and trained team members in automated testing best practices and testing frameworks, resulting in improved team productivity and skills development.</li>
              <li>Conducted code reviews and provided feedback to developers to ensure testability and maintainability of code changes.</li>
              <li>Implemented and maintained monitoring and alerting systems to detect and notify on application issues, resulting in faster resolution of critical issues.</li>
            </ul>
          </div>
        </div>+
      </div>
    </section>
  );
};

export default ExperienceSection;
