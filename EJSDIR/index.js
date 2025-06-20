const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

let port = 8080;
app.listen(port, ()=>{
    console.log(`Server is working on port ${port}`);
});

app.set("view engine", "ejs");
app.get("/", (req, res)=>{
    res.render("home.ejs");
});
// app.get("/hello", (req, res)=>{
//     res.send("hello");
// });

// app.get("/diceroll", (req, res)=>{
//     let DiceVal = Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs", {DiceVal});
// });

// app.get("/ig/:username", (req, res)=>{
//    // const followers = ["RCB", "CSK", "MI", "SRH", "DC", "LSG", "GT", "PBKS", "RR","KKR"];
//     let {username} = req.params;
//     const instaData = require("./views/data.json");
//     let data = instaData[username];
//     if(data){
//     res.render("instagram.ejs", {username, data});
//     }else{
//         res.render("error.ejs", {username});
//     }
// });

app.use(express.urlencoded({extended : true}));

app.get("/register", (req, res)=>{
    let {user, password} = req.query ;
    res.send(`Standard GET request, Welcome ${user}`)
});
app.post("/register", (req, res)=>{
    let {user, password} = req.body ;
    res.send(`Standard POST request, Welcome ${user}`)
});