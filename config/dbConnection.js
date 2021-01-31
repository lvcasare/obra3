

var mysql = require ('mysql');

var connMysql = function(){

return mysql.createConnection({    
    host: 'Localhost',
    user: 'newuser',
    password:'fjsjfhs@(ahd5157YTRcccGr',
    database: 'portal_noticias'
});

};

module.exports = function(){
    return connMysql;
}





