import React, { useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Questions from './Questions.js'
//redux store import
import { movePrevQuestion,moveNextQuestion, evaluateAnswer } from '../hooks/FetchQuestion.js'
import {pushAnswer} from '../hooks/SetResult.js';
import Footer from './Footer'
import useSound from 'use-sound'
import mySound from '../audio.mp3'
import {Navigate} from 'react-router-dom'

export default function Quiz(){
    
    const [check,setChecked]=useState(undefined);
var answer="false";
    const result= useSelector(state=>state.result.result);
    const {queue,trace,answers}= useSelector(state=>state.questions);
    const dispatch=useDispatch();
 //console.log(answers)
 const [value, setChangeText] = useState(true);
 function handleChange() {
    if(check==answers[trace]){
      dispatch(evaluateAnswer())
    }
    setChangeText(!value);
  };

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
        setChangeText(!value)
       
        /** insert a new result into the array */
        if(result.length<=trace){
        dispatch(pushAnswer(check))
    }
       }
        setChecked(undefined)
        
  }

  

    function onChecked(check){
        //console.log(check)
        setChecked(check)
            
    }
    const [isPlaying, setIsPlaying] = React.useState(false);

    const [play, { pause }] = useSound(mySound,{
        volume: 0.25,
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
    });
    const togglePlay = () => {
        
        if (isPlaying) {
          pause();
        } else {
          play();
        }
        setIsPlaying(!isPlaying);
      }
 

    /**Finished exam after last question */
if(result.length && result.length>=queue.length){
    pause();
 return <Navigate to={'/result'} replace='true'></Navigate>
}

    return(
       
         <div>
            <span className='text-light'>Thinking music? &nbsp;</span>
             {!isPlaying? <button
        onClick={togglePlay}><i className="fa-sharp fa-regular fa-circle-play"></i></button>:<button
        onClick={togglePlay}><i className="fa-regular fa-circle-pause"></i></button>}
    
        <div className='container1'>
         {!isPlaying? <p onLoad={togglePlay}> </p>: ''}
            <h1 className='title text-light'>Quiz Application</h1>
            {/* dispaly questions */}
        <Questions onChecked={onChecked} /> 
              
                <>
             { value? <div className='grid'><button id="submitbtn" className='btn next' onClick={handleChange}>Submit</button></div>:
               <div id="navigateQuestions" className='grid'>
                { trace > 0? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                    <button className='btn next' onClick={onNext}>Next</button>
                   </div>  
                }
                
        

        </>
        </div>
        <Footer/>
        </div>
        
    )

}
