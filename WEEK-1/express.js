//respnd with "hello world" when a GET request is made to the homepage
var express = require("express")
const { query } = require("express")
var app = express()
app.get("/", function (request, res){
    res.send("hello world")
})

//listen to a particular port
app.listen(3000)

const express = require("express");
const res = require("express/lib/response");
const { STATUS_CODES } = require("http")
const app = express();
const addtwonumber = (n1,n2) => {
    return n1+n2;
}

app.get("/addtownumber", (req, res) =>{
    const n1 = parseInt(req,query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addtwonumber(n1,n2);
    res.json(stateuscodes: 200, data:result)
} );

console.log(addtwonumber(19,12));
const port=3040;
app.listen(port,()=>{
    console.log("hello I'm listening to port.", port);
})