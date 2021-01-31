module.exports = function (application){

    application.get('/despesa', function (req,res){
        res.render('despesa/form_add_despesa.ejs');// pega url
    });

    application.post('/despesas/salvar', function (req,res){
        var despesa = req.body;
        //res.send(noticias);
        //conexao
        //model

        var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
        var despesasModel = new application.app.models.despesasDAO(connection);// query
        var callback = function(erro,result){//connection.query(<sql>, <f. call back>)
            res.redirect('/despesas');
            };
            //console.log(despesa);
            exemplo = despesa.valor;
            despesa.valor = exemplo.replace(",", ".");
            
            



        despesasModel.salvarDespesa(despesa, callback)//chama query e manda para o call back

        //salvar noticias
        //listar noticias
    });


}