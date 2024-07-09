import React from 'react';
import './index.css';

const education = [
  { institution: 'GOVT Boys High Scool', degree: 'SSC', year: '2011' },
  { institution: 'Sri Vivekananda Jr Colleage', degree: 'Intermediate', year: '2011 - 2014' },
  { institution: 'Dr Samuel Geore Institutions', degree: 'B Tech', year: 'Stopped' },
  { institution: 'Nxtwave', degree: 'Fullstack', year: 'Ongoing' },
  // Add more education details as needed
];

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p className="education-year">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
