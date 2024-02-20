const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const path = require("path")
const ejsMate = require("ejs-mate")

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

app.listen(port, ()=>{
    console.log('Server is listening on port ${port}')
})




