var app = require("./config/server.js");

app.get('/meu', function (req,res){// pega url
    res.render('meu/meu.ejs');
});

//var rotaNoticias = require('./app/routes/noticias.js')(app);// rota

//var rotaHome = require('./app/routes/home.js')(app);//rota

//var rotaformulario_inclusao_noticias = require('./app/routes/formulario_inclusao_noticias.js')(app);


app.listen(3000,function(){// inicia servidor .@1
    console.log('Express listenning 3000.');
});




