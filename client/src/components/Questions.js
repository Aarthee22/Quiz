import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

/**Custom Hooks */
import { useFetchQuestion } from '../hooks/FetchQuestion.js';
/** import { updateResult } from '../hooks/SetResult.js'; */


export default function Questions({onChecked}){
    
    
//useSelector(state=>console.log(state));
    const [checked,setChecked]=useState(undefined);
    const {trace}=useSelector(state=>state.questions);
    const result=useSelector(state=>state.result.result);
    const [{isLoading,apiData,serverError}]=useFetchQuestion()
    const questions= useSelector(state=>state.questions.queue[state.questions.trace])
    //const dispatch=useDispatch()
    const answer=useSelector(state=>state.questions.chkAns);
{ /**  useEffect(()=>{
    dispatch(updateResult({trace,checked}))
},[checked]) */}


    function onSelect(i){
        onChecked(i)
        setChecked(i)
        /** don't want user to update the result after submit */
       // dispatch(updateResult({trace,checked}))
    }
 

    if(isLoading) return <h3 className='text-light'>Questions Loading</h3>
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
                    <div className={`check ${result[trace] == i? ' checked' : ''}`}> </div>
                    </li>
  
                    ))
                }

            </ul>
           <br></br>
           <div className='text-center'>
            { `${answer}`=== 'true'?<i className=" fa-3x fa-regular fa-circle-check" style={{color:'green'}}></i> : <></>}  
                  { `${answer}`=== 'false'? <i className="fa-3x fa-sharp fa-regular fa-circle-xmark" style={{color:'red'}}></i>:<></>}
                  </div>
        </div>
    )
}