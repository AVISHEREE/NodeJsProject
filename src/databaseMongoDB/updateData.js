const dbConnection = require('./mongodb.connect')

const updateData = async () =>{
    let data = await dbConnection();
    let result =await data.updateMany({name:'samsung surface'},{
        $set:{price:520}
    })
    console.log(result);
    
};

updateData()