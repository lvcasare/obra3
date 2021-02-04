module.exports.pagamento = function(application, req, res){
    var get=req.query;
    
    var connection = application.config.dbConnection();   

    var pagamentoModel = new application.app.models.pagamentosDAO(connection);       
    
    var callback = function(erro,result){
            console.log(result);
            res.render('pagamentos/pagamento.ejs',{pagamentos:result,get:get});;
            };        
    pagamentoModel.listar(get.id, callback);
}


module.exports.adicionar = function(application, req, res){
    var pagamento = req.body;
    var get=req.query;
    var connection = application.config.dbConnection();
    var pagamentoModel = new application.app.models.pagamentosDAO(connection);
    var callback = function(erro,result){
        res.redirect('/pagamento?id='+get.id+'&total='+get.total);
        };        
        pagamentoModel.adicionar(pagamento,callback)
}