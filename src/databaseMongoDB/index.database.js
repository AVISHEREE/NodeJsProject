const dbConnection = require('./mongodb.connect')

let getData = async () =>{
    let dbconnect = await dbConnection();
    let data = await dbconnect.find().toArray();
    console.log(data);
}

getData()