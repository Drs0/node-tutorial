// const getPosts = (req,res)=>{
//         res.send("<h1>Hello From Nodes</h1>");
// }
// module.exports = {
//     getPosts
// }
let express = require("express");
const postController = require("../controllers/postcontroller");
const postValidator = require("../validator/postValidator");
const router = express.Router();
router.get("/",postController.getPosts);
router.post("/post",postValidator.createPostValidator, postController.createPosts);

module.exports = router;