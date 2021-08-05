import React,{useState} from 'react';
import { motion } from 'framer-motion';

const Toggle =({children,title}) => {

    const [togglt,setToggle] =useState(false);
    return(
        <motion.div layout className="question" onClick={()=> setToggle(!togglt)}>
            <motion.h4 layout>{title}</motion.h4>
            {togglt ? children: ""}
            <div className="faq-line"></div>
        </motion.div>

    );
};

export default Toggle;