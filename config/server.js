var express = require('express');
var consign = require ('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var multer = require('multer');


var app = express();
    app.set('view engine','ejs');//liga o ejs ao express
    app.set('views','./app/views'); //pasta views em local diferente do padrão
    app.use(bodyParser.urlencoded({extended:true}));//recuperar post in Json
    app.use(expressValidator());//validação
    app.use(express.static('./app/public'));


consign()
.include('app/routes')
.then ('config/dbConnection.js')
.then ('app/models')
.then('app/controllers')
.into(app);

module.exports = app;