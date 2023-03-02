import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

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
       <div>
       <div className='container1'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/*Rules for the quiz*/}
            <ol className="customOl">
                <li>fadad</li>
                <li>asdassA</li>
            </ol>
            <form id="form">
                <input ref={inputRef} className='userid' type="text" placeholder='Username*' />
            </form>
            <div className='start'>
                <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
       
</div>
 
    </div>
    )
}