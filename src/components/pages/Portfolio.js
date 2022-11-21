import React from 'react';
import image1 from '../asset/movie_madness.png';
import image2 from '../asset/digital exercise book.JPG';
import image3 from '../asset/interact_tech_blog.png';
import image4 from '../asset/team_profile_generate.png';
import image5 from '../asset/password_generator.png';
import image6 from '../asset/handy_note_taker.png';


import '../../style/portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className= "projects">
        <div className="card" style={{width: '29rem'}}>
            <img src={image1} className="card-img-top" alt="..."/>
             
            <div className="card-body">    
              <h5 className="card-title">Movie Madness</h5>         
              <p>Deployed URL :<a href="https://nenebeji.github.io/Movie-Madness/" className="card-link">Visit Now 🙂</a></p>
              <p>GitHub Repo :<a href="https://github.com/mikehui1124/Movie_Madness_more" className="card-link">View Source Code 🙂</a></p>
              
            </div>
        </div>

        <div className="card" style={{width: '29rem'}}>
            <img src={image2} className="card-img-top" alt="..."/>
             
            <div className="card-body">    
              <h5 className="card-title">Digital Exercise Book</h5>         
              <p>Deployed URL :<a href="https://immense-mountain-30351.herokuapp.com/" className="card-link">Visit Now 🙂</a></p>
              <p>GitHub Repo :<a href="https://github.com/mikehui1124/digital_excercise_book" className="card-link">View Source Code 🙂</a></p>
              
            </div>
        </div>

        <div className="card" style={{width: '29rem'}}>
            <img src={image3} className="card-img-top" alt="..."/>
             
            <div className="card-body">    
              <h5 className="card-title">Interactive Tech Blog</h5>         
              <p>Deployed URL :<a href="https://quiet-chamber-30968.herokuapp.com/" className="card-link">Visit Now 🙂</a></p>
              <p>GitHub Repo :<a href="https://github.com/mikehui1124/challenge_14_interactive_tech_blog" className="card-link">View Source Code 🙂</a></p>
              
            </div>
        </div>

        <div className="card" style={{width: '29rem'}}>
            <img src={image4} className="card-img-top" alt="..."/>
             
            <div className="card-body">    
              <h5 className="card-title">Team Profile Generator</h5>         
              <p>Deployed URL :<a href="https://drive.google.com/file/d/1p7R7NPfIhUv-EoehFw07lxZipv4K4ZPi/view" className="card-link">Visit Now 🙂</a></p>
              <p>GitHub Repo :<a href="https://github.com/mikehui1124/challenge_10_Team_profile_generator" className="card-link">View Source Code 🙂</a></p>
              
            </div>
        </div>

        <div className="card" style={{width: '29rem'}}>
            <img src={image5} className="card-img-top" alt="..."/>
             
            <div className="card-body">    
              <h5 className="card-title">Password Generator</h5>         
              <p>Deployed URL :<a href="https://mikehui1124.github.io/Challenge_3_password_generator/" className="card-link">Visit Now 🙂</a></p>
              <p>GitHub Repo :<a href="https://github.com/mikehui1124/Challenge_3_password_generator" className="card-link">View Source Code 🙂</a></p>
              
            </div>
        </div>

        <div className="card" style={{width: '29rem'}}>
            <img src={image6} className="card-img-top" alt="..."/>
             
            <div className="card-body">    
              <h5 className="card-title">Handy Note Taker</h5>         
              <p>Deployed URL :<a href="https://dry-cliffs-31651.herokuapp.com" className="card-link">Visit Now 🙂</a></p>
              <p>GitHub Repo :<a href="https://github.com/mikehui1124/challenge_11_handy_notes_taker" className="card-link">View Source Code 🙂</a></p>
              
            </div>
        </div>


      </div>    
  
      
    </div>
  );
}
