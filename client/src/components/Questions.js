import React, { useState } from 'react';
export default function Questions(){
    const [checked,setChecked]=useState(undefined);
    function onSelect(){
        console.log("radio button change")
    }
    return(
        <div  className='questionscs'>
            <h2 className='text-light'>Simple Question 1</h2>
            <ul>
                <li>
                    <input type="radio" value={checked}
                    id="q1-option" name="options"
                    onChange={onSelect()} />
                
                <label htmlFor='q1-option' className='text-primary'>option 2</label>
                <div className='check checked'></div>
                </li>
                <li>
                    <input type="radio" value={checked}
                    id="q1-option" name="options"
                    onChange={onSelect()} />
                
                <label htmlFor='q1-option' className='text-primary'>option 3</label>
                <div className='check checked'></div>
                </li>
                <li>
                    <input type="radio" value={checked}
                    id="q1-option" name="options"
                    onChange={onSelect()} />
                
                <label htmlFor='q1-option' className='text-primary'>option 4</label>
                <div className='check checked'></div>
                </li>
            </ul>
        </div>
    )
}