module.exports = function(application){
    application.get('/', function (req,res){// pega url home
        application.app.controllers.home.index(application,req,res);
        
        
    });
}
