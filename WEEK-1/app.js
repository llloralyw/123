var async = function()
{
    setTimeout(function ()
    {
        log("I am coming out later althought I have been called before the next one")
    }, 2000)
}

var adder = function(first,second)
{
    var sum = first + second
    return sum;
}

var log = function(msg){
    console.log("[Log]: ",msg)
}

//respnd with "hello world" when a GET request is made to the homepage
var express = require("express")
var app = express()
app.get("/", function (request, res){
    res.send("hello world")
})

//listen to a particular port
app.listen(3000)
