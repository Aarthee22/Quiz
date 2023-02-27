import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/**Custom Hooks */
import { useFetchQuestion } from '../hooks/FetchQuestion.js';

import { updateResult } from '../hooks/SetResult.js';
export default function Questions({onChecked}){
    
    const [{isLoading,apiData,serverError}]=useFetchQuestion()
//useSelector(state=>console.log(state));
    const [checked,setChecked]=useState(undefined);
    const dispatch=useDispatch()
    const questions= useSelector(state=>state.questions.queue[state.questions.trace])
    const {trace}=useSelector(state=>state.questions);
    const result=useSelector(state=>state.result.result);

  useEffect(()=>{
    //console.log({trace,checked})
    dispatch(updateResult({trace,checked}))
},[checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace,checked}))
    }
if(isLoading) return <h3 className='text-light'>isLoading</h3>
if(serverError) return <h3 className='text-light'>serverError || "Unknown Error"</h3>

    return(
        <div  className='questionscs'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q,i)=>(
                        <li key={i}>
                        <input type="radio" value={false}
                        id={`q${i}-options`} name="options"
                        onChange={()=>onSelect(i)} />
                    
                    <label htmlFor={`q${i}-options`} className='text-primary'>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                      

                    </li>
                    ))
                }
             
               
            </ul>
        </div>
    )
}