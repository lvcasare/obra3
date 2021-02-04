module.exports.pedido = function(application, req, res){
    var get=req.query;
    var pedidoid=0;
    if (get.id!=null) pedidoid=get.id;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // carregaprodutos para por na seleção   
    var produtosresult;
    var connection = application.config.dbConnection();   
    var produtosModel = new application.app.models.produtosDAO(connection);      
    var callback1 = function(erro,result){
            produtosresult = result;
                };                            
    produtosModel.carregarProdutos(callback1)//chama query e manda para o call back
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (pedidoid==0){
            //cria novo pedido
        var pedidosModel = new application.app.models.pedidosDAO(connection);       
        var callback = function(erro,result){         
            pedidoid=result[0].id;
            res.render('pedidos/pedido.ejs',{pedido:result, produtos:produtosresult, pedidoid:pedidoid});;
            };        
        pedidosModel.carregarPedido(pedidoid, callback)
    }
            else {
                //carrega pedido para mostrar informações sobre ele   
                var pedidobusca;
                var pedidosModel = new application.app.models.pedidosDAO(connection);     
                var callback2 = function(erro,result){
                    pedidobusca = result;
                    };                            
                pedidosModel.carregarPedido2(pedidoid,callback2)
                // itens do pedido
                var itensModel = new application.app.models.itensDAO(connection);      
                var callback1 = function(erro,result,pedido){
                    var result1 = '[{ "id":55}]';
                    result1 = JSON.parse(result1);

                    //grava total no pedido
                    var totalpedido=0;
                    for (var i = 0; i < result.length; i++){
                        totalpedido=totalpedido+result[i].total;                        
                    } 
                    console.log(pedidoid+'********'+totalpedido); 
                    var callback2 = function(erro,result){                        
                        };                            
                    pedidosModel.salvarTotalPedido(pedidoid,totalpedido,callback2)
                    ///////////////////////////////////////////////////////////////////////
                    res.render('pedidos/pedido.ejs',{itens:result, produtos:produtosresult,pedidobusca:pedidobusca, pedidoid:pedidoid,totalpedido:totalpedido});;
                    };                            
                itensModel.carregarItens(pedidoid, callback1)
            }    
}

module.exports.adicionarnovo = function(application, req, res){
        var pedido = req.body;
        var id_pedido=req.query;
        var connection = application.config.dbConnection();
        var pedidosModel = new application.app.models.pedidosDAO(connection);
        var callback = function(erro,result){
            res.redirect('/pedido?id='+id_pedido.id);
            };        
            pedidosModel.adicionarNovo(pedido, callback)
}
module.exports.adicionarantigo = function(application, req, res){
    var pedido = req.body;    
    var id_pedido=req.query;
    var connection = application.config.dbConnection(); 
    var itensModel = new application.app.models.itensDAO(connection);
    var callback = function(erro,result){
        res.redirect('/pedido?id='+id_pedido.id);
        };        
    itensModel.adicionarAntigo(pedido, callback)
}
module.exports.editarpedido = function(application, req, res){
    var pedido = req.body;
    var id_pedido=req.query;
    var connection = application.config.dbConnection();
    var pedidosModel = new application.app.models.pedidosDAO(connection);
    var callback = function(erro,result){
        res.redirect('/pedido?id='+id_pedido.id);
        };        
    pedidosModel.editarPedido(pedido, callback)
}

module.exports.deletar = function(application, req, res){
    var get = req.query;
    console.log (get)
    var connection = application.config.dbConnection();
    var itensModel = new application.app.models.itensDAO(connection);
    var callback = function(erro,result){
        res.redirect('/pedido?id='+get.id);
        };        
    itensModel.deletar(get.itemid, callback)
}




