module.exports.index = function(application,req,res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function(error, result){
        console.log(result);
        res.render('home/index.ejs',{noticias:result});


    });
    
    
    
    
    
}