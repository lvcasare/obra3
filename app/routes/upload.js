module.exports = function (application){
    

    application.get('/formulario_inclusao_noticia', function (req,res){
        application.app.controllers.admin.formulario_inclusao_noticia(application,req,res);
        
    });

    application.post('/upload', function (req,res){
        application.app.controllers.upload.upload1(application,req,res);
        
    });


}