import React from 'react';
import image1 from './asset/6214715_github_logo_icon.png';
import image2 from './asset/7156610_linkedin_social_media_icon.png';

// set the logos to align vertically and horizontally center
function Footer({ currentPage, handlePageChange }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70px',
      backgroundColor: '#ffc266',
      textAlign: 'center'
       }}>
        <span>Get in touch@</span>
       <a href='https://github.com/mikehui1124?tab=repositories' >
         <img src={image1} width='50' height = '50'/>
       </a>
       <a href='https://www.linkedin.com/in/fung-mike-hui-682792125/' >
         <img src={image2} width='50' height = '50'/>
       </a>

    </div>
  );
}

export default Footer;
