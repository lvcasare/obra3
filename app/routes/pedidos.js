module.exports = function (application){

    
    

    application.get('/pedidos', function (req,res){
        application.app.controllers.pedidos.pedidos(application,req,res);
        
    });  

    application.get('/pedidos/deletar', function (req,res){
        application.app.controllers.pedidos.deletar(application,req,res);
        
    });  


}