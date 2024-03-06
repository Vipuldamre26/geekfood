import Navbar from '../components/homepage/Navbar.js';
import Hero from '../components/homepage/Hero.js';
import Content from '../components/homepage/Content.js';
import Cards from '../components/homepage/Cards.js';
import Footer from '../components/homepage/Footer.js';
import './homepage.css';
import React from 'react';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Navbar />
            <Hero />
            <Content />
            <Cards />
            <Footer />
        </div>
    )
}

export default Homepage;