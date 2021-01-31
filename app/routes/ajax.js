module.exports = function (application){
    
    application.get('/ajax1', function (req,res){
        application.app.controllers.ajax.ajax1(application,req,res);
        
    });



    application.get('/ajax', function (req,res){
        //application.app.controllers.ajax.ajax(application,req,res);
        //res.write('<p>resp4444</p>');
        //return res.end();

        //////////////////////////////////////////////////////////
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'fjsjfhs@(ahd5157YTRcccGr',
            database: 'portal_noticias'
        });

        connection.query("SELECT * FROM noticias", function(error, result){
            res.send(result);
        });

        //res.render('noticias/noticias');

        ///////////////////////////////////////////////////////////
        
    });

    application.post('/upload', function (req,res){
        application.app.controllers.upload.upload1(application,req,res);
        
    });
}


