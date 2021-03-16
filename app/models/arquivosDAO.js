
function arquivosDAO(connection){
    this._connection = connection;
}


arquivosDAO.prototype.listar = function (pedidoid, callback1){ 
    this._connection.query('SELECT * FROM arquivos WHERE pedidoid = ' + pedidoid, callback1);
}

arquivosDAO.prototype.adicionar = function (pagamento, callback){ 
    this._connection.query('INSERT INTO arquivos SET ?', pagamento, callback);
}

arquivosDAO.prototype.updateUpload = function (id, z,callback){ 
    this._connection.query('UPDATE arquivos SET img=1, tipo="'+z+'" WHERE id= '+ id, callback);
}

arquivosDAO.prototype.pagamentos = function (callback){ 
    this._connection.query('SELECT * FROM arquivos ', callback);

}


module.exports = function (){
    return arquivosDAO;//
}

