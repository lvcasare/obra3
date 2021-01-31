module.exports.pedido = function(application, req, res){
    var id_pedido=req.query;
    var pedidoid=0;
    if (id_pedido.id!=null) pedidoid=id_pedido.id;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     //console.log(pedidoid);
    var produtosresult;
    var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection     
    var produtosModel = new application.app.models.produtosDAO(connection);// query        
    var callback1 = function(erro,result){//connection.query(<sql>, <f. call back>)
            produtosresult = result;
            //console.log(produtosresult);
                };                            
    produtosModel.carregarProdutos(callback1)//chama query e manda para o call back
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (pedidoid==0){
        // se id = 0 
            //cria novo pedido
        var pedidosModel = new application.app.models.pedidosDAO(connection);// query        
        var callback = function(erro,result){//connection.query(<sql>, <f. call back>)            
            console.log(result);
            //console.log(result1);
            res.render('pedidos/pedido.ejs',{pedido:result, produtos:produtosresult}, );;
            };        
        pedidosModel.carregarPedido(pedidoid, callback)//chama query e manda para o call back
    }
    // se id != 0 
            //retorna itens

            else {

                     //console.log(pedidoid);
                    
                    var pedidobusca;
                    var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection     
                    var pedidosModel = new application.app.models.pedidosDAO(connection);// query        
                    var callback2 = function(erro,result){//connection.query(<sql>, <f. call back>)
                        pedidobusca = result;
                            //console.log(produtosresult);
                                };                            
                    pedidosModel.carregarPedido2(pedidoid,callback2)//chama query e manda para o call back



                var itensModel = new application.app.models.itensDAO(connection);// query        
                var callback1 = function(erro,result){//connection.query(<sql>, <f. call back>)
                    //console.log(result);
                    var result1 = '[{ "id":55}]';
                    result1 = JSON.parse(result1);
                    res.render('pedidos/pedido.ejs',{itens:result, produtos:produtosresult,pedidobusca:pedidobusca});;
                    };                            
                itensModel.carregarItens(pedidoid, callback1)//chama query e manda para o call back
            }
    
}

module.exports.adicionarnovo = function(application, req, res){
        var pedido = req.body;
        var id_pedido=req.query;
        //console.log("este "+id_pedido.id)
        var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
        var pedidosModel = new application.app.models.pedidosDAO(connection);// query
        var callback = function(erro,result){//connection.query(<sql>, <f. call back>)
            res.redirect('/pedido?id='+id_pedido.id);
            };        
            pedidosModel.adicionarNovo(pedido, callback)//chama query e manda para o call back
}

module.exports.adicionarantigo = function(application, req, res){
    var pedido = req.body;
    var id_pedido=req.query;
    //console.log("este "+id_pedido.id)
    var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
    var itensModel = new application.app.models.itensDAO(connection);// query
    var callback = function(erro,result){//connection.query(<sql>, <f. call back>)
        res.redirect('/pedido?id='+id_pedido.id);
        };        
    itensModel.adicionarAntigo(pedido, callback)//chama query e manda para o call back
}


module.exports.editarpedido = function(application, req, res){
    var pedido = req.body;
    var id_pedido=req.query;
    //console.log("este "+id_pedido.id)
    var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
    var pedidosModel = new application.app.models.pedidosDAO(connection);// query
    var callback = function(erro,result){//connection.query(<sql>, <f. call back>)
        res.redirect('/pedido?id='+id_pedido.id);
        };        
    pedidosModel.editarPedido(pedido, callback)//chama query e manda para o call back
}




