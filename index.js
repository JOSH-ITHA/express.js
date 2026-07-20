const express=require('express');
const app=express();
const PORT=3000;


//Home Route
app.get('/',(req,res)=>{
    res.send("Hello world!Express Tutorial");
})
app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000');
});
