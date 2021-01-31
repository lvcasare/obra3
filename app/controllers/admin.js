module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia.ejs",{ validacao : {},noticia : {}});// pega url
}

module.exports.noticias_salvar = function(application, req, res){

        var noticia = req.body;

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data_noticia','Data é obrigatória').notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('noticia','Noticia é obrigatória').notEmpty();

        var errors = req.validationErrors();
        if (errors){
            res.render("admin/form_add_noticia.ejs",{ validacao : errors, noticia : noticia });
            return;
        }

        var connection = application.config.dbConnection();// conexão com o bd que vem config/dbConnection    
        var noticiasModel = new application.app.models.noticiasDAO(connection);// query
        var callback = function(erro,result){//connection.query(<sql>, <f. call back>)
            res.redirect('/noticias');
            };        
        noticiasModel.salvarNoticia(noticia, callback)//chama query e manda para o call back

}