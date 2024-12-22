import React from 'react'
import { motion } from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from 'react-icons/ai'
const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            opacity: 0,
            x: "-100%",
        },
        twoAndThree: {
            opacity: 0,
            y: "-100%",
        },

        four: {
            opacity: 0,
            x: "100%",
        },
    };

    return (
        <div id='services'>
            <h2>Skills</h2>
            <section>
                <motion.div className='serviceBox1' 
                whileInView={animations.whileInView}
                initial={animations.one}>

                    <h3>1+</h3>
                    <p>Year Experience</p>
                </motion.div>
                <motion.div className='serviceBox2'
                 whileInView={animations.whileInView}
                 initial={animations.twoAndThree}>
                    <FaReact />
                    <span>ReactJs/Redux</span>
                </motion.div>
                <motion.div className='serviceBox3'
                 whileInView={animations.whileInView}
                 initial={animations.twoAndThree}
                 transition={{
                   delay: 0.2,
                 }}>
                    <AiFillIeCircle />
                    <span>Html/CSS/Js</span>
                </motion.div>
                <motion.div className='serviceBox4'
                whileInView={animations.whileInView}
                initial={animations.four}
      >
                   <FaCss3Alt />
                    <span>Tailwind/Bootstrap/Gsap</span>
                </motion.div>
            </section>
        </div>
    )
}



export default Services
