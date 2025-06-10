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

app.get("/", (req, res)=>{
    res.send("You selected main route");
});

app.get("/search", (req, res)=>{
    res.send("You selected search route");
});