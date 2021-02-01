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

    this._connection.query('INSERT INTO produtos (nome) VALUES ('+pedido.nome+')', pedido);
    this._connection.query('INSERT INTO itens SET ?', pedido, callback);


}
PedidosDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);

}

PedidosDAO.prototype.editarPedido = function(pedido, callback){
    console.log(pedido.id);
    this._connection.query('UPDATE pedidos SET ? WHERE id = ' + pedido.id , pedido, callback);
    
    
    //this._connection.query('INSERT INTO pedidos SET ?', pedido, callback);

}


module.exports = function (){
    return PedidosDAO;
}

