
import mongoose from "mongoose";
const {Schema} = mongoose;

/** question model */

const question_model=new Schema({
    questions: { type:Array, default: []},
    answers: {type:Array, default: []},
    createdAt: {type:Date, default:Date.now}
});

export default mongoose.model('Question',question_model);