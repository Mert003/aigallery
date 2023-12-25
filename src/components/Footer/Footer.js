import React from 'react';

import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      
        <div className='footer-copyrights'>
          <p >© 2023 Your Company. All rights reserved.</p>
        </div>

        <div className='footer-icons'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={32} />
      </a>
      <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        <FaPinterest size={32} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} />
      </a>
        </div>
      
    </div>
  );
};
export default Footer;