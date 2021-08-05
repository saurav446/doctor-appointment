import React from 'react';
import FeaturedService from '../Home/FeaturedService/FeaturedService';
import HeaderMain from '../Home/HeaderMain/HeaderMain'; 
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Abouts = () => {
    return (
        <div>
            <Navbar />
            <HeaderMain />
            <Services /> 
            <FeaturedService />
            <Footer />
            
        </div>
    );
};

export default Abouts;