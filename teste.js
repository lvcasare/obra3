var http = require('http');//variavel do servidor


var server = http.createServer(function(req,res){// criação do servidor
    var categoria=req.url;

    if (categoria=='/categoria'){
        res.end("categoria");//resposta 
    }else 
        res.end("hello world");//resposta 

});

server.listen(3000);//inicialização do servidor
console.log('Listenning 3000');

//***************************************************** */
/*
const { request, response } = require('express');
var express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.redirect('html.html');

})

app.listen(3333);
console.log('Server is up. Listenning 3333. ');

*/
