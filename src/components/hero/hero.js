// Hero.js
import React from 'react';

import { motion } from 'framer-motion';
import "./hero.css";
import { HiStar } from "react-icons/hi";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    
    <motion.div
      className="hero-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='hero-innerContainer'>

      <motion.h1 variants={itemVariants}>Artificial Visions: A Gallery of AI-Generated Art <HiStar color='gold' /></motion.h1>
      <motion.p variants={itemVariants}>
      Welcome to our AI Art Gallery! Explore amazing art made by computers. See how machines turn code into stunning images. It's a whole new world where technology meets creativity. Dive in and enjoy the beauty of AI-generated art!
      </motion.p>

      </div>
    </motion.div>
  );
};

export default Hero;
