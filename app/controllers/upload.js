module.exports.upload1 = function(application, req, res){
    var pedido = req.body;
    var id_pedido=req.query;
    //console.log("este "+id_pedido.id)
    var formidable = require('formidable');
    var fs = require('fs');



    var path = require('path');
    var appDir = path.dirname(require.main.filename);
    console.log('path: '+appDir);


    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath =  appDir+"/app/public/fotos/"+id_pedido.id+'.jpg';
      //var newpath = 'C:/' + files.filetoupload.name;
      //var newpath = 'C:/fotos/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
    });
});



    var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
    var pedidosModel = new application.app.models.pedidosDAO(connection);// query

        res.redirect('/pedido?id='+id_pedido.id);
     

}