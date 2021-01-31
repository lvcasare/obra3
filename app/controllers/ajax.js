module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia.ejs",{ validacao : {},noticia : {}});// pega url
}

module.exports.ajax = function(application, req, res){

    res.render('home/ajax.ejs');

}


module.exports.ajax1 = function(application, req, res){

    res.render('home/ajax1.ejs');

}