const express  =require('express') ;
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors=require("cors");



require('dotenv/config');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

const postRoute = require('./routes/posts');
const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.use("/posts",postRoute)


mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser:true,
    useUnifiedTopology:true},
    ()=>console.log("connect to db")
);


const PORT = process.env.PORT || 5001
if(process.env.NODE_ENV !=='test'){
    app.listen(PORT,()=>{
        console.log(`server runing port:${PORT}`)
    });
}
module.exports = app