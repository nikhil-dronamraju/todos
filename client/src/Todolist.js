import {React} from 'react';
import {todosSelector} from './appSlice';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {AiFillCaretRight} from 'react-icons/ai';
import './App.css';



const Todolist = () => {
    const todos = useSelector(todosSelector);
    const navigate = useNavigate();

    const todosVariant = {
        initial: {
            opacity: 0
        },

        animate: {
            opacity: 1,
            transition: {
                duration: 3
            }
        }
    }

    const todosReturn = todos.map(
        (item) => {
            return (
            <motion.li variant = {todosVariant} className = 'listelement'>
                <motion.span className = 'listespan'>

                {<AiFillCaretRight size = {10}/>} {item.todo}</motion.span>
            <br/>
            <motion.button 
            className = 'listbutton' 
            onClick = {() => {
                navigate(`/edit_delete/${item._id}`)
            }}
            whileHover = {{scale: 1.05}}
            whileTap = {{scale: .95}}>Edit/Delete</motion.button>
            <br/>
            <br/>
            </motion.li>
            )
        }
    )

    return (
            <motion.ul
            className = 'list' 
            variants = {todosVariant} 
            initial = "initial" 
            animate = "animate">
                {todosReturn}
            </motion.ul>
    )
}

export default Todolist;
