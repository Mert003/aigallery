// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

import "./navbar.css";

const Navbar = () => {

  const [isClicked,setIsClicked] = useState(false);

 
  return (
    <nav className='topnav' id='mytopnav'>
      <div className="logo">
        {/* Replace 'logo.png' with your actual image path */}
        <Link to="/"><img src={require('../../images/logo.png')} alt="Logo" /></Link>
      </div>

      <div className='toggle' onClick={()=>{setIsClicked(!isClicked)}}>
        <GiHamburgerMenu />
      </div>

      <ul className={`${isClicked ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/design" state={{ from: "creative" }} >Creative</Link>
        </li>
        <li>
          <Link to="/design" state={{ from: "craft" }} >Crafts</Link>
        </li>
        <li>
          <Link to="/design" state={{ from: "dress" }} >Dress Designs</Link>
        </li>
        <li>
          <Link to="/design" state={{ from: "uiweb" }} >UI Web Designs</Link>
        </li>
      </ul>

  
    </nav>
  );
};

export default Navbar;
