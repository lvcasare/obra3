module.exports = function (application){
    

    application.get('/arquivo', function (req,res){
        application.app.controllers.arquivo.arquivo(application,req,res);
        
    });

    application.post('/arquivo/adicionar', function (req,res){
        application.app.controllers.arquivo.adicionar(application,req,res);
        
    });

    application.get('/arquivo/upload', function (req,res){
        application.app.controllers.arquivo.upload(application,req,res);
        
    });

    application.post('/arquivo/upload2', function (req,res){
        application.app.controllers.arquivo.upload2(application,req,res);
        
    });

    application.get('/arquivos', function (req,res){
        application.app.controllers.arquivo.arquivos(application,req,res);
        
    });

  



}