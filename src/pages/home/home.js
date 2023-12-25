import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from '../../components/hero/hero'
import Gallerygrid from '../../components/gallerygrid/gallerygrid'
import Galleryflex from '../../components/galleryflex/galleryflex'
import Uidesign from '../../components/uidesign/uidesign'
import Extraordinary from '../../components/extraordinary/extraordinary'
import Illustrations from '../../components/illustrations/illustrations'
import Footer from '../../components/Footer/Footer'
const home = () => {
  return (
    <div>
       <Navbar /> 
        <Hero />
        <Gallerygrid content="creative" />
        <Galleryflex content="craft" />
        <Uidesign content="dress"/>
        <Extraordinary content="extraordinary"/>
        <Footer />
       {/*  <Illustrations content="illustrations" /> */}
      
    </div>
  )
}

export default home
