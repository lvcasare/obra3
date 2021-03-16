
function pagamentosDAO(connection){
    this._connection = connection;
}


pagamentosDAO.prototype.listar = function (pedidoid, callback1){ 
    this._connection.query('SELECT * FROM pagamentos WHERE pedidoid = ' + pedidoid, callback1);
}

pagamentosDAO.prototype.adicionar = function (pagamento, callback){ 
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

pagamentosDAO.prototype.updateUpload = function (id, z,callback){ 
    this._connection.query('UPDATE pagamentos SET img=1,tipo="'+z+'" WHERE id= '+ id, callback);
}

pagamentosDAO.prototype.pagamentos = function (callback){ 
    this._connection.query('SELECT * FROM pagamentos ', callback);

}


module.exports = function (){
    return pagamentosDAO;//
}

