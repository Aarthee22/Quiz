import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import '../styles/Result.css'
import ResultTable from './ResultTable'
import { earnedPoints } from '../helper/helper';
import { usePublishResult } from '../hooks/SetResult'

export default function Result(){
    const dispatch = useDispatch()
  const state=useSelector(state=>state)
const { questions : { queue, answers}, result : { result, userId}} = useSelector(state => state)

  
    const totalPoints=queue.length *10;
    const earnPoints = earnedPoints(result, answers,10);

   /** store user result */
    usePublishResult({
        result,
        username:userId,
        points:earnPoints});

  /**   useEffect(()=>{
        console.log(state)
    console.log(earnPoints)
})*/

    function onRestart(){
        //console.log('onRestart')
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    return(
        <div className='container1'>
            <h1 className='title text-light'>Quiz Application</h1>
            <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>{userId}</span>
            </div>
            <div className='flex'>
                <span>Total points</span>
                <span className='bold'>{totalPoints||0}</span>
            </div>
            <div className='flex'>
                <span>Earned Points</span>
                <span className='bold'>{earnPoints|| 0 }</span>
            </div>
            </div>
            <div className='start'>
<Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>
            <div className='container1'>
                {/*Result Table*/}
                <ResultTable></ResultTable>
            </div>
        </div>
    )
}