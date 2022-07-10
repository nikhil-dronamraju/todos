import React from 'react';
import {motion} from 'framer-motion';
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlinePhone} from 'react-icons/ai';

const Navbar = () => {

    return (
        <motion.div className = 'navbar'>
            <motion.nav className = 'navi'>
                <motion.div
                whileHover = {{scale: 1.2}}
                whileTap = {{scale: .8}} 
                className = 'navElement'
                onClick = {() => {
                    window.open("https://github.com/nikhil-dronamraju")
                }}><AiOutlineGithub size = {30}/></motion.div>
                <br/>
                <motion.div
                whileHover = {{scale: 1.2}}
                whileTap = {{scale: .8}}  
                className = 'navElement'
                onClick = {() => {
                    window.open("https://www.linkedin.com/in/nikhil-dronamraju-154818144/")
                }}
                ><AiOutlineLinkedin size = {30}/></motion.div>
                <br/>
                <motion.div 
                whileHover = {{scale: 1.2}}
                whileTap = {{scale: .8}} 
                className = 'navElement'><AiOutlinePhone size = {30}/></motion.div>
                <br/>
            </motion.nav>
        </motion.div>
    )
}

export default Navbar;
