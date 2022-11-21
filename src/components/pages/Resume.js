import React from 'react';
import '../../style/resume.css';

export default function Resume() {
  return (
    <div>      
      <h2>Resume</h2>
      <div id='resume'>
          <p>
            Download my <a href= '../asset/001.JPG'>resume</a>
          </p>

          <h5>Front-end proficiencies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>responsive design</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>C#/.NET Framework</li>
          </ul>

          <h5>Back-end proficiencies</h5>
          <ul>
            <li>Express.js</li>
            <li>MySQL ref. Sequelize ORM </li>
            <li>MongoDB ref. Mongoose ORM</li>
            <li>Graphql query code</li>
            <li>API route design for CRUD</li>
                            
          </ul>
          <hr/>      
      </div>

    </div>
  );
}
