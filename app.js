const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const path = require("path")
const ejsMate = require("ejs-mate")
// const MongoStore = require("connect-mongo");


const app = express()

const port = 3000

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "/public")))



app.engine("ejs", ejsMate)





app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/menu",(req,res)=>{
    res.render("menu.ejs");
})

app.get("/stay",(req,res)=>{
    res.render("stay.ejs");
})

app.get("/events",(req,res)=>{
    res.render("event.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs");
})

app.get("/orderfood",(req,res)=>{
    res.render("orderfood.ejs");
})

app.get("/bookstay",(req,res)=>{
    res.render("bookstay.ejs");
})


app.listen(port, ()=>{
    console.log('Server is listening on port ${port}')
})




