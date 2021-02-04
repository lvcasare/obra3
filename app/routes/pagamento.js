module.exports = function (application){
    

    application.get('/pagamento', function (req,res){
        application.app.controllers.pagamento.pagamento(application,req,res);
        
    });

    application.post('/pagamento/adicionar', function (req,res){
        application.app.controllers.pagamento.adicionar(application,req,res);
        
    });

    application.get('/pagamento/upload', function (req,res){
        application.app.controllers.pagamento.upload(application,req,res);
        
    });

    application.post('/pagamento/upload2', function (req,res){
        application.app.controllers.pagamento.upload2(application,req,res);
        
    });

    application.get('/pagamentos', function (req,res){
        application.app.controllers.pagamento.pagamentos(application,req,res);
        
    });

    application.get('/', function (req,res){
        application.app.controllers.pagamento.pagamentos(application,req,res);
        
    });



}