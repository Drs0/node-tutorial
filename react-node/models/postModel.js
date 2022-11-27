const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : "Title is Required",
        minlength: 8,
        maxlength : 30
    },
    body: {
        type : String,
        required : "Body is Required",
        minlength: 8,
        maxlength : 250
    }
})
module.exports = mongoose.model("Post",postSchema);


