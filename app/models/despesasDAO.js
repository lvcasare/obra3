function DespesasDAO(connection){
    this._connection = connection;

}

DespesasDAO.prototype.getDespesas = function (callback){
    this._connection.query('SELECT * FROM despesas', callback);
}

DespesasDAO.prototype.getNoticia = function (callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = 1', callback);
}

DespesasDAO.prototype.salvarDespesa = function (despesa,callback){
    //console.log(despesa);
    this._connection.query('INSERT INTO despesas SET ?', despesa, callback);
}




module.exports = function (){
    return DespesasDAO;
}

