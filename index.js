const fs = require('fs');
const path = require('path');
const express = require('express');
const reqUser = require('./src/middleware/username.middleware');
const dbConnection = require('./src/databaseMongoDB/mongodb.connect');
const insert = require('./src/databaseMongoDB/insertData')
const app = express();
const route = express.Router();
const ejsPage = path.join(__dirname,'./src/views');
const staticFilePath = path.join(__dirname,'./src/staticPage');
app.set('view engine','ejs');
app.set('views',ejsPage);
app.use(express.json());
app.use(express.static(staticFilePath));
// fs.writeFileSync(`${dirPath}/abc.txt`,'a')
//- fs.unlink('abc.tx',(err)=>{
//     if (err) console.log(err);
//     console.log("file unlinked");
// })
// fs.writeFileSync('info.txt','hello')
// fs.renameSync('info1.txt','info.txt')
// fs.appendFileSync('info.txt',"hello")

// app.get('/about',(req,resp)=>{
//         resp.sendFile(`${staticFilePath}/about.html`)
// })



app.get('',(req,resp)=>{
    resp.sendFile(`${staticFilePath}/index.html`)
})
app.get('/profile',(req,resp)=>{
    const user = {
        name:'akash',
        age:'18',
        class:'S.Y.I.T',
    }   
    resp.render('profile',{user});
})
app.get('/login',reqUser,(req,resp)=>{
    resp.render('login')
})
app.get('/user-data',async (req,resp)=>{
    const db = await dbConnection();
    const data = await db.find().toArray();
    resp.send(data);
})
app.post('/insert-product',(req,resp)=>{
    console.log(req.body);
    insert(req.body);
    resp.send("hello")
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${staticFilePath}/404Page.html`)
})
app.listen(5000,()=>console.log("listing on port 5000"))
console.log(__dirname);
console.log(__filename);

