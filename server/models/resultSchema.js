import mongoose from "mongoose";
const {Schema} = mongoose;

/** result model */

const result_model=new Schema({
    username:{type:String},
    result:{type:Array,default:[]},
    points:{type:Number, default:0},
    createdAt:{type:Date, default:Date.now}
});

export default mongoose.model('result',result_model);