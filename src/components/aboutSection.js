import React from 'react';
import home1 from '../img/home1.png';
//styled
import styled from "styled-components";
import { About,Description,Hide,Image } from '../styles';
//Framer  motion
import { motion } from 'framer-motion';
import { titleAnim , fade, photoAnim } from '../animation';
import Wave from './Wave';


const AboutSection= () => {

    
    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any Photography or videgraphy ideas that you have. We are professionals with amazing skills to help you achieve it.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </About>
    );
}

//styled components


export default AboutSection;