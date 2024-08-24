const dbConnection = require('./mongodb.connect')

// dbConnection()
const insert = async (data) =>{
    console.log("insert function");   
    const db = await dbConnection();
    const dataInsertion = await db.insertOne(
        {name:`${data.name}`,brand:`${data.brand}`,price:data.price,category:data.category}
    ) 
    if(dataInsertion.acknowledged){
        console.log("data inserted");
    } 
    else{
        console.log("data insertion problem");
    }
}

module.exports = insert