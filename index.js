import express from 'express';
import add from './math.js';
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello ExpressJS');
    console.log(add(2,3));
})
app.get('/about',(req,res)=>{
    res.end('Hello About ExpressJS');
})
app.get('/profile',(req,res)=>{
    res.send('<h1>Hello Profile ExpressJS<h1>');
})

app.listen(port,()=>{
    console.log('App listening on port 3000');
})