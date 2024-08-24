const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://akash12:akash12@cluster0.dv1tz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);

async function dbConnection() {
try {
        let result = await client.connect();
        let db = result.db('e-comm');
        return collection = db.collection('products'); 
} catch (error) {
    console.log(`Error in Database Connection ${error}`);    
}
}
module.exports = dbConnection;
