const Post = require("../models/postModel");
//controller

exports.getPosts= (req,res)=>{
    // res.send("<h1>Hello From Node</h1>");
    // res.json({
    //     posts:[{
    //         title : "Hello"
    //     },{
    //         title: "Hi",
    //         author : "DRS0"
    //     }]
    // })
    const posts = Post.find().select("title body").then((posts)=>{
        res.status(200).json({posts:posts});
    })
    .catch((err)=>{console.log("error")});
}
exports.createPosts = (req,res)=>{
    const post = new Post(req.body);
    console.log("Creating Post" , req.body);
    // post.save(
    //     (err,result) => {
    //     if(err)
    //     {
    //         return res.status(400).json({error : err})
    //     }
    //     res.status(200).json({post : result})
    //     }
    // )

    post.save().then ((result) => {res.status(200).json({post : result})})

}//if u use re.body instead of post u get undifined so install npm i body-parser 