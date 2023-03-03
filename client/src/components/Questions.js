import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**Custom Hooks */
import { evaluateAnswer, useFetchQuestion } from '../hooks/FetchQuestion.js';
import { updateResult } from '../hooks/SetResult.js';
import handleChange from './Quiz.js'

export default function Questions({onChecked}){
    
    
//useSelector(state=>console.log(state));
    const [checked,setChecked]=useState(undefined);
    const {trace}=useSelector(state=>state.questions);
    const result=useSelector(state=>state.result.result);
    const [{isLoading,apiData,serverError}]=useFetchQuestion()
    const questions= useSelector(state=>state.questions.queue[state.questions.trace])
    const dispatch=useDispatch()
    const {answers}= useSelector(state=>state.questions);
    const state=useSelector(state=>state);
    const answer=useSelector(state=>state.questions.chkAns);
console.log(answer)
  useEffect(()=>{
    dispatch(updateResult({trace,checked}))
},[checked])


    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace,checked}))
    }
 

   // if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>serverError || "Unknown Error"</h3>

    return(
        <div className='questions text-style'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul className='customul' key={questions?.id}>
                {
                    questions?.options.map((q,i)=>(
                        <li className='li1' key={i}>
                        <input type="radio" value={false}
                        id={`q${i}-options`} name="options"
                        onChange={()=>onSelect(i)} />
                    
                    <label htmlFor={`q${i}-options`} className='label1 text1-primary'>{q}</label>
                    <div className={`check ${result[trace] == i? ' checked correct' : ''}`}> </div>
                  { `${answer}`=== 'true' ? <i className="fa-regular fa-circle-check"></i> : <></>}  
                    </li>
                         
                    ))
                  
               
                }
         
         
            </ul>
           
            <i className="fa-sharp fa-regular fa-circle-xmark"></i>
        </div>
    )
}