import {React, useEffect} from 'react';
import Postform from './Postform';
import Todolist from './Todolist';
import {useDispatch} from 'react-redux';
import {getRequest} from './appSlice';
import {motion} from 'framer-motion';
import Navbar from './Navbar';


const Homescreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRequest())
    }, [dispatch])


    return (
        <motion.div className = 'homescreen'>
            <Navbar/>
            <motion.h1 
            className = 'homescreentitle' 
            initial = {{opacity: 0}} 
            animate = {{opacity: 1}}
            transition = {{duration: 2}}>Todos App</motion.h1>
            <Postform/>
            <br/>
            <Todolist/>
        </motion.div>
    )
}

export default Homescreen;
