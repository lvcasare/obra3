
function pagamentosDAO(connection){
    this._connection = connection;
}


pagamentosDAO.prototype.listar = function (pedidoid, callback1){ 
    this._connection.query('SELECT * FROM pagamentos WHERE pedidoid = ' + pedidoid, callback1);
}

pagamentosDAO.prototype.adicionar = function (pagamento, callback){ 
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}


module.exports = function (){
    return pagamentosDAO;
}

