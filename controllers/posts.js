import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage)

        res.status(200).json(postMessage)
        
    } catch (error) {
        res.status(404).json({message:error.message})
        console.log(error)
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
        // https://restapitutorial.com/httpstatuscodes.html
        
    } catch (error) {
        res.status(409).json({message:error.message})
        
    }
}