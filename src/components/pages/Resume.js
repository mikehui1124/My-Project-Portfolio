import React from 'react';
import image from '../asset/01.png';
import '../../style/resume.css';

export default function Resume() {
  return (
    <div>      
      <h2>Resume</h2>
      <div id='resume'>
          <p>
            Download my <a href= {image}>resume</a>
          </p>

          <h5>Front-end skills</h5>
          <ul>
            <li>JavaScript</li>
            <li>C#/.NET</li>
            <li>WinForms</li>
            <li>React framework/Hooks</li>
            <li>Responsive UI design</li>
            <li>JQuery</li>
            <li>HTML5</li>
            <li>Mobile first development</li>
            <li>Test-driven development- JEST</li>            
            <li>Bootstrap UI</li>
            <li>HandleBar template</li>
            <li>Use of 3rd-party API</li>        
          </ul>

          <h5>Back-end skills</h5>
          <ul>
            <li>SQL Language for Database</li>
            <li>SQL Server Database Development</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful Endpoint design</li>
            <li>MySQL database/ Sequelize ORM design</li>                      
            <li>MongoDB database/ Mongoose ORM design</li>
            <li>GraphQL query language</li>                                        
          </ul>
          <hr/>      
      </div>

    </div>
  );
}
