
function ItensDAO(connection){
    this._connection = connection;
}


ItensDAO.prototype.carregarItens = function (pedidoid, callback1){
 
    this._connection.query('SELECT * FROM itens WHERE pedidoid = ' + pedidoid, callback1);
}

ItensDAO.prototype.adicionarAntigo= function (pedido,callback){   

    this._connection.query('INSERT INTO itens SET ?', pedido, callback);

}

ItensDAO.prototype.deletar= function (id,callback){   

    this._connection.query('DELETE FROM itens WHERE id = ' + id, callback);

}



module.exports = function (){
    return ItensDAO;
}

