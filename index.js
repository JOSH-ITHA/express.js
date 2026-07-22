// 
import express from 'express';
import path from 'path';


const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    console.log(path.resolve('index.html'));
    const filepath=path.resolve('index.html');
    res.sendFile(filepath);
})
app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000');

})