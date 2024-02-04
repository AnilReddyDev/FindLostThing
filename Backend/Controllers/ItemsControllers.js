const asynchandler = require('express-async-handler');

const Item = require("../Model/ItemModel");

// fetching all post 
const getAllItems = asynchandler(async (req,res)=>{
    const response = await Item.find();
    res.json(response)
})


const postItem = asynchandler(async (req,res)=>{
  try {
    const {ownerId, img, desc, contact} = req.body;
    const newPost = await Item.create({
        ownerId, 
        img, 
        desc,
        contact
    })
    res.status(200).json(newPost)
  } catch (error) {
    console.log("Unable to submit ",error)
  }


})

const putItem = asynchandler(async (req,res)=>{
    const postId = req.params.id;
    const { img, desc, contact} = req.body;
    const updatePost = await Item.findOneAndUpdate({_id:postId},{ img, desc, contact},{ new: true } )
    res.status(200).send(updatePost)
})

const deleteItem = asynchandler(async (req,res)=>{
    const postId = req.params.id;
    const deletePost = await Item.findByIdAndDelete(postId)
    res.status(200).send(`${deletePost} is removed`)
})

module.exports = {getAllItems, postItem ,putItem ,deleteItem}