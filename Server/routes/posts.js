const express = require('express');
const Post = require('../models/Post');


const router = express.Router()

router.get("/", async(req,res)=>{
    try {
        const toDo = await Post.find();
        res.send(toDo);
        
    } catch (error) {
        res.send(error);
    }
});

router.post('/' , (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({mesaage : err})
        });
});

module.exports =router;