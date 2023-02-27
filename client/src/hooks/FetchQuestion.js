import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import data, {answers} from '../components/database/data.js'
/**redux actions */
import * as Action from '../redux/question_reducer'
/** Fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = ()=>{
    const dispatch=useDispatch();
    const [getData,setGetData]=useState({isLoading:false,apiData:[],serverError:null});
        useEffect(()=>{
setGetData(prev=>({...prev,isLoading:true}));
/** async fn to fetch backend data */
(async()=>{
try{
let question = await data;
if(question.length>0){
    setGetData(prev=>({...prev,isLoading:false}));
    setGetData(prev=>({...prev,apiData:{question,answers}}))
    /**dispatch an action */
    dispatch(Action.startExamAction({question,answers}))
}else{
    throw new Error("No Questions available");
}

}catch(error){
    setGetData(prev=>({...prev,isLoading:false}));
    setGetData(prev=>({...prev,serverError:error}));
}
})();
},[dispatch]);
return [getData,setGetData];
}

/**MoveAction Dispatch function */
export const moveNextQuestion = ()=>async(dispatch)=>{
    try{
       dispatch(Action.moveNextAction())
    }catch(error){
        console.log(error)
    }
}

export const movePrevQuestion = ()=>async(dispatch)=>{
    try{
       dispatch(Action.movePrevAction())
    }catch(error){
        console.log(error)
    }
}