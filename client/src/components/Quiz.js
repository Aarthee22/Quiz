import React, { useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Questions from './Questions.js'
//redux store import
import { movePrevQuestion,moveNextQuestion } from '../hooks/FetchQuestion.js'
import {pushAnswer} from '../hooks/SetResult.js';

import {Navigate} from 'react-router-dom'

export default function Quiz(){
    const [check,setChecked]=useState(undefined);

    const result= useSelector(state=>state.result.result);
    const {queue,trace,answers}= useSelector(state=>state.questions);
    const dispatch=useDispatch();
 
    /**Prev button event handler */
    function onPrev(){
        /** if condition to check if trace>0 */
        const prev= trace>0?dispatch(movePrevQuestion()):" ";
        return prev
        
    }
      /**Next button event handler */
    function onNext(){
        /** Update the trace value by one using move next action */
   //console.log(queue.length)
       if(trace<queue.length){
        dispatch(moveNextQuestion())
        /** insert a new result into the array */
        if(result.length<=trace){
        dispatch(pushAnswer(check))
    }
       }
        setChecked(undefined)
   /** To check if the answer is correct for each question as you go.    
    if(check==answers[trace]){
       // document.getElementsByName(options[check]).style.color ="green"
        console.log(true)
    }
    else{
       // document.getElementsByName(options[check]).style.color ="red"
    
    }
    */ 
    }

    function onChecked(check){
        //console.log(check)
        setChecked(check)
            
    }
    /**Finished exam after last question */
if(result.length && result.length>=queue.length){
    return <Navigate to={'/result'} replace='true'></Navigate>
}
    return(
        <div className='container1'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* dispaly questions */}
        <Questions onChecked={onChecked}/> 
            <div className='grid'>
                { trace>0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div> }
                <button className='btn next' onClick={onNext}>Next</button>
            </div>

        </div>
    )
}