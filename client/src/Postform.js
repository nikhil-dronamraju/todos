import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import {postRequest} from './appSlice';
import {motion} from 'framer-motion';

const Postform = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const [deadline, setDeadline] = useState('');
    
    const body = {
        todo: todo,
        deadline: deadline,
    }

    return (
        <motion.div initial = {{opacity: 0, x: '-100vw'}} animate = {{opacity: 1, x: '0vw'}} transition = {{damping: 12, delay: 1, type: "spring", stiffness: 120}} className = 'postformContainer'>
            <motion.form className = 'postform' onSubmit = {(e) => {
                e.preventDefault()
                if (todo === ''){
                    alert('Enter a todo, dummy.');
                }
                else{
                    dispatch(postRequest(body));
                }
            }}>
                <motion.div className = 'todoinput'>
                <motion.label className = 'postformlabel'>Enter todo...</motion.label>
                <br/>
                <motion.input className = 'postforminput' type = "text" placeholder = "Enter todo here..." onChange = {(e) => {setTodo(e.target.value)}}/>
                </motion.div>
                <br/>

                <motion.div className = 'todoinput'>
                <motion.label className = 'postformlabel'>Enter deadline...</motion.label>
                <br/>
                <motion.input className = 'postforminput' placeholder = "Enter deadline here..." type = "date" onChange = {(e) => {setDeadline(e.target.value)}}/>
                </motion.div>
                <motion.button className = 'postformbutton' type = "submit" whileHover = {{scale: 1.05}} whileTap = {{scale: .95}}>Enter</motion.button>
            </motion.form>
        </motion.div>
    )
}

export default Postform;
