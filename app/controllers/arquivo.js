module.exports.arquivo = function(application, req, res){
    var get=req.query;
    
    var connection = application.config.dbConnection();   

    var arquivoModel = new application.app.models.arquivosDAO(connection);       
    
    var callback = function(erro,result){
            console.log(result);
            res.render('arquivos/arquivo.ejs',{pagamentos:result,get:get});;
            };        
            arquivoModel.listar(get.id, callback);
}


module.exports.adicionar = function(application, req, res){
    var arquivo = req.body;
    var get=req.query;
    var connection = application.config.dbConnection();
    var arquivoModel = new application.app.models.arquivosDAO(connection);
    var callback = function(erro,result){
        res.redirect('/arquivo?id='+get.id+'&total='+get.total);
        };        
        arquivoModel.adicionar(arquivo,callback)
}

module.exports.upload = function(application, req, res){

    var get=req.query;
    res.render('arquivos/upload.ejs',{get:get});;
}

module.exports.upload2 = function(application, req, res){
    var get=req.query;

    var formidable = require('formidable');
    var fs = require('fs');

    var path = require('path');
    var appDir = path.dirname(require.main.filename);


    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      console.log(files.filetoupload.name);
      var z = files.filetoupload.name.slice(-3);
      if (z=='peg') z='jpg';
      console.log(z);
      //var newpath =  appDir+"/app/public/pag/"+get.id+'.jpg';
      var newpath =  appDir+"/app/public/arq/"+get.id+'.'+z;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        //res.write('File uploaded and moved!');
        var connection = application.config.dbConnection();
        var arquivoModel = new application.app.models.arquivosDAO(connection);
        var callback = function(erro,result){
            res.redirect('/arquivo?id='+get.pedidoid+'&type='+z);
            };        
        arquivoModel.updateUpload(get.id,z,callback)
    });
});

}


module.exports.arquivos = function(application, req, res){  
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


       
     

