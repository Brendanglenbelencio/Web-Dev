import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './NavBar/NavBar';
import HeroSection from './HeroSection/HeroSection';

// To Do:
// - Create Github repo for this project
// - Finish Navlinks, Make the links float to the right side of the Navbar
// - Change the color of the nav links and create animation for it's hover and visited state
// - Sign-in link should have an orange button like padding or have different font at least
// - Create draft for Hero Section
// - Fix the CSS of the Hero Section

const App = () => {
  return (
    <>
    <Navigation fixed="top"/>
    <HeroSection />
    </>
  )
}

export default App