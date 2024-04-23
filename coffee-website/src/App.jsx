import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './NavBar/NavBar';
import HeroSection from './HeroSection/HeroSection';
import ShopInfo from './ShopInfo/ShopInfo';
import MenuSection from './MenuSection/MenuSection';

// To Do:
// - Create Github repo for this project
// - Finish Navlinks, Make the links float to the right side of the Navbar
// - Change the color of the nav links and create animation for it's hover and visited state
// - Sign-in link should have an orange button like padding or have different font at least
// - Create draft for Hero Section
// - Fix the CSS of the Hero Section
// - Learn the basics of Github
// - this is to indicate that this is the first branch of the file

// Hero Sction To Do list
// Fix the image responsiveness at smaller screen sizes
// Maybe customize the order now button
// Change font
// Create animations for nav bar
// Create Draft for the next section

const App = () => {
  return (
    <>
    <Navigation fixed="top"/>
    <HeroSection />
    <ShopInfo />
    <MenuSection />
    </>
  );
}

export default App