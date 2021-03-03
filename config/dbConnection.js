

var mysql = require ('mysql');

var connMysql = function(){

return mysql.createConnection({    
    host: '52.67.220.198',
    user: 'monty',
    password:'fjsjfhs@(ahd5157YTRcccGr',
    database: 'portal_noticias'
});

};

module.exports = function(){
    return connMysql;
}





