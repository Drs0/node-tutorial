exports.createPostValidator = (req,res,next) => {
    //title validator
    req.check("title","Write a title!").notEmpty();
    req.check("title","title must be more than 8 and less than 30").isLength({
        min :8, max:30
    })
    //body validator
    req.check("body","Write a body!").notEmpty();
    req.check("body","body must be more than 8 and less than 250").isLength({
        min :8, max:250
    })
    //errors
    const errors = req.validationErrors()
    // if error show the first error
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error:firstError});
    }
    //continue to next middleware
    next();
}