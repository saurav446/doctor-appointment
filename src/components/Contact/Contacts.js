import React from 'react';
import Footer from '../Shared/Footer/Footer';
import FooterCol from '../Shared/FooterCol/FooterCol';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contact/Contact';
import HeaderMain from '../Home/HeaderMain/HeaderMain';

const Contacts = () => {
    return ( 
        <div>
            <Navbar />
            <HeaderMain />
            <Contact /> 
            <Footer />
        </div>
    );
};

export default Contacts;