import React from 'react'
import Questions from './Questions.js'
export default function Quiz(){
    /**Prev button event handler */
    function onPrev(){
        console.log('On Prev click');
    }
      /**Next button event handler */
    function onNext(){
        console.log('On next click');
    }
    return(
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* dispaly questions */}
        <Questions /> 
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>

        </div>
    )
}