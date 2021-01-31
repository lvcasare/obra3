
function produtosDAO(connection){
    this._connection = connection;
}


produtosDAO.prototype.carregarProdutos = function (callback1){
 
    this._connection.query('SELECT * FROM produtos ORDER BY NOME ASC ', callback1);
}


module.exports = function (){
    return produtosDAO;
}

