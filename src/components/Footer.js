import React from 'react';
import image1 from './asset/6214715_github_logo_icon.png';
import image2 from './asset/7156610_linkedin_social_media_icon.png';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (
    <div style={{
      height: '70px',
      backgroundColor: '#ffc266',
      textAlign: 'center'
       }}>
  
       <a href='https://github.com/mikehui1124' >
         <img src={image1} width='50' height = '50'/>
       </a>
       <a href='https://www.linkedin.com' >
         <img src={image2} width='50' height = '50'/>
       </a>

    </div>
  );
}

export default Footer;
