const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");

const { urlencoded } = require("express");
app.use(express.json());
require('./db/conn');
app.use(cors());

app.use(express.urlencoded())


app.use(require('./router/auth'));
dotenv.config({path:'./config.env'});
if(process.env.NODE_ENV == "production"){
app.use(express.static("amazon/build"));
const path =require("path");
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'amazon','build','index.html'));
    
})
}




const PORT=process.env.PORT ||5000;

app.listen(PORT,()=>{
    console.log(`this server is running on ${PORT} `)
}
)