module.exports = function (application){
    


    application.get('/pedido', function (req,res){
        application.app.controllers.pedido.pedido(application,req,res);
        
    });  

    application.post('/pedido/adicionarnovo', function (req,res){
        
        application.app.controllers.pedido.adicionarnovo(application,req,res);
        
    });

    application.post('/pedido/adicionarantigo', function (req,res){
        
        application.app.controllers.pedido.adicionarantigo(application,req,res);
        
    });

    application.post('/pedido/editarpedido', function (req,res){
        
        application.app.controllers.pedido.editarpedido(application,req,res);
        
    });
    application.get('/pedido/deletar', function (req,res){
        application.app.controllers.pedido.deletar(application,req,res);
        
    });  


}