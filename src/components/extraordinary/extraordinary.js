import React, { useEffect, useState }  from 'react';
import './extraordinary.css'; // Import the CSS file for styling
import ImageData from "../../api/data.json";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFaceGrimace } from "react-icons/fa6";


const Extraordinary = (props) => {

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
    className="extraordinary-container"
   
  >
   
        <div style={{display:"flex",flexDirection:"row",alignItems:"center" , justifyContent:"center"}}><h1>{props.content}</h1><FaFaceGrimace style={{marginLeft:"5px"}} /></div>
    <div className='extraordinary-innerContainer'>
    {imageData.slice(0,4).map((itemPath,index)=>{
        return(
        
        
        <motion.img src={itemPath} alt='sdfsf1'
       
        key={index}
        className="extraordinary-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} />)

    })}
    </div>
    </motion.div>
  )
}

export default Extraordinary
