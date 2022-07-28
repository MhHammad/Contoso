var express = require("express")
var app = express()

app.get('/',(req,res)=>{
    
    res.send(
        "<h1>Welcome to Contoso</h1>"
    )

})

var server = app.listen(8000)
console.log("Contoso running at port 8000")