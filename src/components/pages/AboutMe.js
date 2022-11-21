import React from 'react';
import image from '../asset/me.JPG';
import '../../style/aboutme.css';

export default function AboutMe() {
  return (
    <div>
        <h2>About Me</h2>
        <div id='aboutMe'>
          <img src={image} width='300' height = '230'/>
          <h4></h4>
          <p>
          Mike is a junior programming with two year of practical experience. Proficient with developing 
          CRUD type web application using C#/ .NET Framework with backend server-side interaction, he is compentent in developing web application using JavaScript/node.js stack supporting backend database. He is good
          at creating frontend webpage with vibrant responsive feature using CSS/JS/ Angular. Currently he is based in Hong Kong.      
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
