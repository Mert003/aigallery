import React, { useState,useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../../components/navbar/navbar';
import Gallerygrid from '../../components/gallerygrid/gallerygrid';
import Galleryflex from '../../components/galleryflex/galleryflex';
import Uidesign from '../../components/uidesign/uidesign';
import Extraordinary from '../../components/extraordinary/extraordinary';
import Footer from '../../components/Footer/Footer';

const Design = () => {
    /* const location=useLocation();
    const api=location.api ; */

    const location = useLocation();
    const [from,setFrom] = useState();
    useEffect(()=>{
        setFrom(location.state.from);
       /*  setFrom(location.state); */
    },[location])
   
    console.log(from);


  return (
    <div>
        <Navbar />
     
        <Galleryflex content={from}  />
        <Footer />
        
    </div>
  )
}

export default Design
