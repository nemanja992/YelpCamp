const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

const campgrounds = [
    {name: "Zlatibor", image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Kopaonik", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Stara Planina", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"}
]

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req,res)=>{
 res.render("campgrounds", {campgrounds});
});

app.post("/campgrounds", (req,res)=> {
 let name = req.body.name;
 let image = req.body.imgUrl;
 let newCampground = {name:name, image:image}
 campgrounds.push(newCampground);
 res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req,res)=>{
    res.render("new.ejs");
});

app.listen(3000, ()=> {
    console.log("YelpCamp server started!");
});
