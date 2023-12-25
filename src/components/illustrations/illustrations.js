import React, { useEffect, useState }  from 'react';
import './illustrations.css'; // Import the CSS file for styling
import ImageData from "../../api/data.json";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoColorPalette } from "react-icons/io5";


const Illustrations = (props) => {

    const [imageData , setImageData]=useState([]);
    
    useEffect(()=>{
        const contentData = ImageData.find((item) => item.type === props.content); 
        setImageData(contentData ? contentData.imagePaths : []);
        

       
       
    },[]);

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);
   

  return (
   
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: -50 }}
    animate={controls}
    transition={{ duration: 1 }}
    className="illustrations-container"
   
  >
   
        <div style={{display:"flex",flexDirection:"row",alignItems:"center" , justifyContent:"center"}}><h1>{props.content}</h1><IoColorPalette /></div>
    <div className='illustrations-innerContainer'>
    {imageData.slice(2,6).map((itemPath,index)=>{
        return(
        
        
        <motion.img src={itemPath} alt='sdfsf1'
       
        key={index}
        className="illustrations-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} />)

    })}
    </div>
    </motion.div>
  )
}

export default Illustrations
