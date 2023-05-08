// JavaScript code here
let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.locals.pretty = true;

app.get(['/','/:area'],function(req,res){
    // app.get
})

app.post('/',function(req,res){
    let area = req.body.select;
    res.redirect('/'+area);
})

