module.exports.pagamento = function(application, req, res){
    var get=req.query;
    
    var connection = application.config.dbConnection();   

    var pagamentoModel = new application.app.models.pagamentosDAO(connection);       
    
    var callback = function(erro,result){
            console.log(result);
            res.render('pagamentos/pagamento.ejs',{pedidos:result});;
            };        
    pagamentoModel.listar(get.id, callback);
}