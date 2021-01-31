module.exports = function (application){
    application.get('/despesas', function (req,res){// pega url

        var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
        var noticiasModel = new application.app.models.despesasDAO(connection);// query

        var callback = function(erro,result){//connection.query(<sql>, <f. call back>)
            res.render('despesa/despesas.ejs',{despesas:result});
        }
        
        noticiasModel.getDespesas(callback)//chama query e manda para o call back
        


        //
    });
    }