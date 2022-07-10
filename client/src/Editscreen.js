import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {putRequest, deleteRequest} from './appSlice';
import {motion} from 'framer-motion';



const Editscreen = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const [deadline, setDeadline] = useState('');
    const navigate = useNavigate()
    
    const body = {
        id: id,
        todo: todo,
        deadline: deadline,
    }

    return (


        <motion.div className = 'editscreen'>
            <motion.div 
            initial = {{x: '-100vw', opacity: 0}} 
            animate = {{x: '0vw', opacity: 1}} 
            transition = {{
                type: 'tween',
                duration: 1.1,
            }}
            className = 'editcontainer'>
            <motion.form className = 'editform' onSubmit = {(e) => {
                e.preventDefault();
                if (todo === '') {
                    navigate('/')
                }
                else{
                    dispatch(putRequest(body))
                    navigate('/')
                }
            }}>
                <motion.div className = 'editinputcontainer'>
                <motion.label className = 'editlabel'>Edit Item...</motion.label>
                <br/>
                <motion.input className ='editinput' type = "text" onChange = {(e) => {setTodo(e.target.value)}}/>
                </motion.div>
                <br/>    
                <motion.div className = 'editinputcontainer'>            
                <motion.label className = 'editlabel'>Edit deadline...</motion.label>
                <br/>
                <motion.input className ='editinput' type = "date" onChange = {(e) => {setDeadline(e.target.value)}}/>
                </motion.div>
                <br/>
                <motion.button 
                whileHover = {{scale: 1.05}}
                whileTap = {{scale: 0.95}}
                className = 'editbutton' 
                type = "submit">Confirm Edit</motion.button>
                <motion.button
                whileHover = {{scale: 1.05}}
                whileTap = {{scale: 0.95}} 
                className = 'editbutton' 
                type = "button" onClick = {() => {
                dispatch(deleteRequest(body))
                navigate('/')
            }}>Delete</motion.button>
            </motion.form>
            </motion.div>
            
        </motion.div>
    )
}

export default Editscreen
