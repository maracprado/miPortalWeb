const path = require('path');
const fs = require ('fs');
const url = require ('url');

function logMiddleware (req, res, next){
    if (req.session.user == undefined){
        fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'),  new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' - ' + 'Un usuario no autenticado ingresó a la ruta ' + req.url + '\n');
        next();
    }else{
        fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'),  new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' - ' + 'El usuario '+ req.session.user["username"] +' ingresó a la ruta ' + req.url + '\n');
        next();
    }
}

module.exports = logMiddleware;