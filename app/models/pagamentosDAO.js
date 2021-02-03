
function pagamentosDAO(connection){
    this._connection = connection;
}


pagamentosDAO.prototype.listar = function (pedidoid, callback1){ 
    this._connection.query('SELECT * FROM pagamentos WHERE pedidoid = ' + pedidoid, callback1);
}


module.exports = function (){
    return pagamentosDAO;
}

