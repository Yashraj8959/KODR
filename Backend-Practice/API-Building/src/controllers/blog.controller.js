import { Blog } from "../models/blogModel.js"

export const getBlogs = async (req,res)=>{
    const blogs = await Blog.find();
    res.status(200).json({blogs
    })
}

export const updateBlogs = async (req,res)=>{
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    try {
        const post = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
        res.status(200).json({ post });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const createBlogs = async (req,res)=>{
    const { title,content} = req.body;
    if(!title || !content) {
        return res.status(400).json({
            "message":"Empty fields"
        })
    }
    try {
        const newpost = await Blog.create({
            title,content
        })
        res.status(201).json({newpost})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({"message":"Error in creating blog"})
    }
}
export const deleteBlogs = async (req,res)=>{
    const { id } = req.params;
    try {
        const post = await Blog.findByIdAndDelete(id);
        res.status(200).json({ post });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}