module.exports = function (application){
    

    application.get('/pagamento', function (req,res){
        application.app.controllers.pagamento.pagamento(application,req,res);
        
    });

    application.post('/pagamento/adicionar', function (req,res){
        application.app.controllers.pagamento.adicionar(application,req,res);
        
    });



}