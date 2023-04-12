const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")

const tempelatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)

app.get("/",(req,res)=>{
    res.render("login")
    //console.log("login");
})

app.get("/",(req,res)=>{
    res.render("signup")
   // console.log("signup");
})

app.post("/signup",async (req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }
//to deal with mongodb we use await function
await collection.insertMany([data])

    res.render("home")


})

app.listen(3000,()=>{
    console.log("port connected");
})
