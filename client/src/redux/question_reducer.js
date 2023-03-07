import { createSlice } from "@reduxjs/toolkit"
export const questionReducer =createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0,
        chkAns:""
    },
    reducers:{
        startExamAction:(state,action)=>{
            let {question, answers} = action.payload
            return{
                ...state,
                queue:question,
                answers
            }

        },
        moveNextAction:(state)=>{
            return {
                ...state,
                trace: state.trace+1,
                chkAns:""
            }
        },
        movePrevAction:(state)=>{
            return {
                ...state,
                trace: state.trace-1
            }
        },
        resetAllAction:()=>{
            return{
                queue:[],
                answers:[],
                trace:0
            }
        },
        evaluateCorrectAnswerAction:(state)=>{
            return {
                ...state,
                chkAns:true
            }
        },
        evaluateInCorrectAnswerAction:(state)=>{
            return {
                ...state,
                chkAns:false
            }
        }

    }
})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction,evaluateCorrectAnswerAction,evaluateInCorrectAnswerAction}=questionReducer.actions
export default questionReducer.reducer
