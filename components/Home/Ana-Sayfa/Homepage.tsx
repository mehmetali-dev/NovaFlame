import React from 'react'
import Catalog from './Catalog'
import Banner from './Banner'
import Navbar from '../Navbar'
import About from './About'
import HeaderBanner from './HeaderBanner'
import Slider from './Slider'
import Products from './Products'
import NovaAbout from './NovaAbout'

const Homepage = () => {
  return (
    <React.Fragment>
        <Banner/>
        <Navbar/>       
        <HeaderBanner/>
        <About/>
        <Catalog/>
        <Products/>  
        <NovaAbout/>      
        <Slider/>       
    </React.Fragment>
  )
}

export default Homepage