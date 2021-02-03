module.exports = function (application){
    

    application.get('/pagamento', function (req,res){
        application.app.controllers.pagamento.pagamento(application,req,res);
        
    });



}