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

module.exports.upload = function(application, req, res){

    var get=req.query;
    res.render('pagamentos/upload.ejs',{get:get});;
}

module.exports.upload2 = function(application, req, res){
    var get=req.query;

    var formidable = require('formidable');
    var fs = require('fs');

    var path = require('path');
    var appDir = path.dirname(require.main.filename);
    console.log('path: '+appDir);

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;

      var z = files.filetoupload.name.slice(-3);
      if (z=='peg') z='jpg';
      
      var newpath =  appDir+"/app/public/pag/"+get.id+'.'+z;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        //res.write('File uploaded and moved!');
        var connection = application.config.dbConnection();
        var pagamentoModel = new application.app.models.pagamentosDAO(connection);
        var callback = function(erro,result){
            res.redirect('/pagamento?id='+get.pedidoid);
            };        
        pagamentoModel.updateUpload(get.id,z,callback)
    });
});

}


module.exports.pagamentos = function(application, req, res){  
    var connection = application.config.dbConnection(); 

    var pedidos;


    var pedidosModel = new application.app.models.pedidosDAO(connection);       
    
    var callback = function(erro,result){
            pedidos=result;
                      
            };        
    pedidosModel.carregarTodos(callback);




    var pagamentoModel = new application.app.models.pagamentosDAO(connection);       
    
    var callback = function(erro,result){
        //console.log(pedidos) ; 
            res.render('pagamentos/pagamentos.ejs',{pagamentos:result, pedidos:pedidos});;
            };        
    pagamentoModel.pagamentos(callback);
}


       
     

