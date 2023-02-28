import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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