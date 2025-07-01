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
            Mike is a university student with software development. He is keen on modern web development using Node.js suite, Rest endpoints,
             data model and modular design. Currently engaged in desktop development for the energry retail sector using .Net, he is involved 
             in conducting regression test for full scale web applications using automated script. He is based in the UK.
            </p>            
            <p>
            Possessed good analytical mind & problem-solving skills in delivering clear algorithms, he is mindful of client’s expectation with timeliness, 
            quality service and innovations in the product development cycle. Feel free to have a look at the profolio of his projects 
            on the next tab.
            </p>

          <h5>Frontend skills</h5>
          <ul>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>HTML5</li>
            <li>C#/.NET for WinForms</li>
            <li>Responsive UI design</li>
            <li>Mobile first development</li>          
            <li>React framework</li>           
            <li>Test-driven development- JEST</li>
            <li>MVC modular design</li>            
            <li>HandleBars template</li>                      
          </ul>

          <h5>Backend skills</h5>
          <ul>          
            <li>Node.js</li>
            <li>Express Server</li>
            <li>RESTful Endpoint design</li>
            <li>MySQL Database Design</li> 
            <li>SQL Language</li>
            <li>Sequelize ORM model</li>
            <li>MongoDB database/ Mongoose ORM design</li>
            <li>SQL Server Database Development</li>           
            <li>GraphQL query language</li>                                       
          </ul>
          <hr/>  
        </div>    
   </div>
  );
}
