import Question from "../models/questionSchema.js";
import resultSchema from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'

/** get all questions */
export async function getQuestion(req,res){
    try{
    const q=await Question.find();
    res.json(q);
    }catch(error){
        res.json({error})
    }
}

/** post all questions */
export async function insertQuestion(req,res){
   try{
Question.insertMany({questions, answers}).then(()=>{
res.json({msg:"Data Saved Successfully"});
})
   }catch(error){
    res.json({error})
}
}

/** delete all questions */
export async function deleteQuestion(req,res){
    try{
        await Question.deleteMany();
        res.json({msg:"Questions Deleted Successfully"});
        }catch(error){
            res.json({error})
        }
}

/** get all result */
export async function getResult(req,res){
   try{
    const r=await resultSchema.find();
    res.json(r)
   }catch(error){
    res.json({error})
   }
}

/** post all result */
export async function storeResult(req,res){
    try{
        const {username, result, points}=req.body;
        if(!username && !result) throw new Error("Data not provided");
        /** insert method to insert only one document */
        resultSchema.create({username, result, points}).then(()=>{
            res.json({msg:"Result saved successfully"})
        })
    }catch(error){
        res.json({error})
    }
}
/** delete all result */
export async function deleteResult(req,res){
    try{
        await resultSchema.deleteMany();
        res.json({msg:"Result Deleted Successfully"});

    }catch(error){
        res.json({error})
    }
}
