function PedidosDAO(connection){
    this._connection = connection;
}
PedidosDAO.prototype.carregarPedido = function (pedidoid, callback){
    this._connection.query('INSERT INTO pedidos (fase) VALUES ("insert")');  
    this._connection.query('SELECT * FROM pedidos ORDER BY id DESC LIMIT 1', callback);   
}
PedidosDAO.prototype.carregarPedido2 = function (pedidoid,callback){       
    this._connection.query('SELECT * FROM pedidos WHERE id = '+ pedidoid, callback);  
}
PedidosDAO.prototype.adicionarNovo = function (pedido,callback){   

    this._connection.query('INSERT INTO produtos SET ?', pedido);
    this._connection.query('INSERT INTO itens SET ?', pedido, callback);
}
PedidosDAO.prototype.editarPedido = function(pedido, callback){
    this._connection.query('UPDATE pedidos SET ? WHERE id = ' + pedido.id , pedido, callback);

}
PedidosDAO.prototype.salvarTotalPedido = function(pedidoid,totalpedido, callback){
    
    this._connection.query('UPDATE pedidos SET total="'+totalpedido+'" WHERE id = ' + pedidoid, callback);
}

PedidosDAO.prototype.salvarTotalPedido = function(pedidoid,totalpedido, callback){
    
    this._connection.query('UPDATE pedidos SET total="'+totalpedido+'" WHERE id = ' + pedidoid, callback);
}
PedidosDAO.prototype.carregarTodos = function (callback){  
    this._connection.query('DELETE FROM pedidos WHERE fase = "insert"');     
    this._connection.query('SELECT * FROM pedidos ORDER BY fase ASC, data ASC', callback);  
}

PedidosDAO.prototype.deletar = function (id, callback){  
    this._connection.query('DELETE FROM pedidos WHERE id = '+ id, callback);
}

PedidosDAO.prototype.updatenota = function (id,nota,z ,callback){  
    this._connection.query('UPDATE pedidos SET nota='+nota+', tipo = "'+z+'" WHERE id= '+ id, callback);
}


module.exports = function (){
    return PedidosDAO;
}

