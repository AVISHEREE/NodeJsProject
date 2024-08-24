module.exports = reqUser = (req,res,next) =>{
    if(!req.query.name){
        res.send("Please enter your username")
    }
    else if(req.query.name === "akash"){
        next()
    }
    else{
        res.send("User doe'nt exist")
    }
}