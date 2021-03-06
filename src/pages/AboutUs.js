import React from 'react';
import AboutSection from '../components/aboutSection';
import ServicesSection from '../components/servicesSection'
import FaqSection from '../components/FaqSection';
//animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

//brings to the top of the page as we refresh
import ScrollTop from '../components/ScrollTop';

const AboutUs= () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit='exit' >
            <ScrollTop /> 
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;