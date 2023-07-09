const express=require("express");
const nodemon=require("nodemon");
const HomeRouter=require("./routes/home")
const AuthRoute=require("./routes/auth");
const app=express();



app.use(express.json());
app.use("/" , AuthRoute);
app.use("/", HomeRouter);



app.listen( 8000 , ()=> {
   
    console.log("server listening at 8000");})


