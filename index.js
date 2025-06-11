const express = require("express");
const app = express();

const port = 8080; //3000  
app.listen(port, ()=>{
    console.log(`app listening on port ${8080}`);
});

// app.use((req, res)=>{
//     let code = "<h1>Standard Fruits</h1><ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>";
//     res.send(code);
//     console.log("Response received");
// });

// app.get("/", (req, res)=>{
//     res.send("this is the main route");
// });

// // app.get("/search", (req, res)=>{
// //     res.send("this is  search route");
// // });
// // app.get("/info", (req, res)=>{
// //     res.send("You selected information route");
// // });

// app.get("/:username/:id", (req, res)=>{
//     let {username, id} = req.params;
//     let codeStr = `<h1>Welcome to the account of @${username}</h1>`;
//     res.send(codeStr);
// });

// app.get("/search", (req, res)=>{
//     let {q} = req.query ;
//     if(!q){
//         res.send(`<h1>No query entered<h1>`);
//     }
//     console.log(`Query searched is : ${q}`);
//     res.send(`<h1>This is the search results for ${q}<h1>`);
// });