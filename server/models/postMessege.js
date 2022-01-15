import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    title:String,
    messege:String,
    creater:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const Postmsg = mongoose.model('Postmsg',postSchema);
export default Postmsg;