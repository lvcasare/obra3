module.exports.noticias = function(application, req, res){
    
        var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
        var noticiasModel = new application.app.models.noticiasDAO(connection);// query


        noticiasModel.getNoticias(function(erro,result){//connection.query(<sql>, <f. call back>)
            
            res.render('noticias/noticias.ejs',{noticias:result});
        })//chama query e manda para o call back
}


module.exports.noticia = function(application, req, res){    
    var connection = application.config.dbConnection();//conexão com o bd que vem config/dbConnection    


    var noticiasModel = new application.app.models.noticiasDAO(connection);

    var id_noticia = req.query;

    //console.log(id_noticia);

    noticiasModel.getNoticia(id_noticia,function(erro,result){//connection.query(<sql>, <f. call back>)
         res.render('noticias/noticia.ejs',{noticia:result});
        //res.send(result);
    })  

}
