module.exports = function (application){
    

    application.get('/pedido', function (req,res){
        application.app.controllers.pedidos.pedido(application,req,res);
        
    });

    application.post('/pedido/adicionarnovo', function (req,res){
        
        application.app.controllers.pedidos.adicionarnovo(application,req,res);
        
    });

    application.post('/pedido/adicionarantigo', function (req,res){
        
        application.app.controllers.pedidos.adicionarantigo(application,req,res);
        
    });

    application.post('/pedido/editarpedido', function (req,res){
        
        application.app.controllers.pedidos.editarpedido(application,req,res);
        
    });


}