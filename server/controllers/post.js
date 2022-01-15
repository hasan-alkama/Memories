import PostMessage from "../models/postMessege.js";


export const getpost = async(req,res) => {
    try{

        const postMessages =await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch(err)
    {
         res.status(404).json({message: err.message});
    }
}
export const createPost = async(req, res) => {
    const post =req.body;
    const newPost = new PostMessage(post);
    try {
         
      await newPost.save();
       res.status(200).json({message: newPost.message});
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}