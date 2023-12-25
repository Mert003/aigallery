// Gallery.js
import React, { useEffect, useState }  from 'react';
import './gallerygrid.css'; // Import the CSS file for styling
import ImageData from "../../api/data.json";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdCelebration } from "react-icons/md";


const Gallerygrid = (props) => {

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
   
  
    

/*     useEffect(() => {
      // Fetch data from the local JSON file
      fetch('../../api/data.json')
        .then((response) =>{ 
       
            response.json();
        })
        .then((data) => {
          console.log(data);
          const pathData = data.find((item) => item.type === props.content);
          setImageData(pathData ? pathData.imagePaths : []);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); */



  return (
    

    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: -50 }}
    animate={controls}
    transition={{ duration: 1 }}
    className="gallery-container"
    style={{marginTop:"50px"}}
  >
      
      <div style={{display:"flex",flexDirection:"row",alignItems:"center" , justifyContent:"center"}}><h1>{props.content}</h1><MdCelebration style={{marginLeft:"5px"}} /></div>

    <div className="gallery-grid-container">       

      <motion.div
            key={1}
            className="grid-item big-item"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          ><img src={imageData[0]} alt='Prop 1'/></motion.div>

      <motion.div
            key={2}
            className="grid-item"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>

            <img src={imageData[1]} alt='Prop 2'/>
      </motion.div>

      <motion.div
            key={3}
            className="grid-item"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
              
              <img src={imageData[2]} alt='Prop 3'/>

      </motion.div>






      <motion.div
            key={4}
            className="grid-item"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}>
              
              <img src={imageData[5]} alt='Prop 4'/>
      </motion.div>




      <motion.div
            key={5}
            className="grid-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
              
              <img src={imageData[4]} alt='Prop 5'/>

      </motion.div>
    
    </div>
    </motion.div>
  );
};

export default Gallerygrid;
