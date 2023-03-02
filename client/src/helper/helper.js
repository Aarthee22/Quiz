import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
/** axios lib helps to make a get req */
import axios from "axios"

export function earnedPoints(result, answers,points){ 
    return result.map((e, i) => answers[i] == e).filter(i=>i).map(i => points).reduce((prev,curr)=>prev+curr,0);
}

export function checkAnswer(result,answers){
    const check= result.map(i=>answers[i]===i)
return check
}

/** check user auth */
export function CheckUserExit({children}){
    const auth=useSelector(state=>state.result.userId)
    return auth ? children :<Navigate to={'/'} replace={true}></Navigate>
}

/** get server data */
export async function getServerData(url, callback){
 const data= await (await axios.get(url))?.data;
 return callback ? callback(data): data;
}


/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data): data;
   }