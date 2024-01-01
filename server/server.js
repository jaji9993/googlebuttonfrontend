require("dotenv").config();
const express=require('express');
const cors=require("cors");
const passport=require("passport");
const cookieSession=require("cookie-session");
const passportSetup=require("./passport");
const authRoute=require("./routers/auth");
const app=express();
app.use(
    cookieSession({
        name:"sessionn",
        keys:["cyberwolve"],
        maxAge:24*60*60*100,
    })
)


app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentialsls:true,
    })
);

app.use("/auth",authRoute);
const port=process.env.PORT||8080;
app.listen(port,()=>console.log(`listening on port ${port}.....`));


/*
const mongoose=require('mongoose');
mongoose.connect(mongodb+srv://sajeevincrevel:93938181402@master.a7v8n3o.mongodb.net/?retryWrites=true&w=majority);
app.get('/',(req,res)=>{
    return res.send("sajeev")
})
app.get('/home',(rq,res)=>{
    return res.send("hello every one");
})
app.listen(5000,()=>console.log("server is running"));
*/