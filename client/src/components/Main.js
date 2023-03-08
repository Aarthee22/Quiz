import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
import Footer from './Footer';
export default function Main(){
   <>

    
   </>
    const dispatch=useDispatch()

    const inputRef = useRef(null)
    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    return(
    <div className='footer'>
       <div className='container1'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/*Rules for the quiz*/} <br></br>
            <ol className='customOl'>
            
                <li>The Quiz consists of 5 questions</li>
                <li>Each question has 4 options and you can choose your answer</li>
                <li>There is a submit button that evaluates your answer. </li>
                <li>Once answer is submited, you are unable to make a change to thaat answer</li>
                <li>Click the next question to move to the next question</li>
                <li>Each correct question gets 10 points</li>
                <li>Result table is displayed at the end</li>
            </ol>
            <form id="form">
                <input ref={inputRef} className='userid' type="text" placeholder='Username*' />
            </form>
            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
            
</div>
        <Footer/>
        </div>

    )
}