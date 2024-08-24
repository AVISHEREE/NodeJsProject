const dbConnection = require('./mongodb.connect')

const deleteData = async ()=>{
    let db = await dbConnection();
    let result = await db.deleteOne({name:'abc'})
    console.log(result);
}

deleteData()