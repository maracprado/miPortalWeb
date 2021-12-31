// Acá nos falta nuestra fuente de datos
const fs = require('fs');
const path = require('path');
const bcryptjs = require ("bcryptjs");
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const session =  require('express-session');

// Acá nos falta un objeto literal con las acciones para cada ruta
const prdController = {
    getAll: (req,res) => {
        res.render (path.join(__dirname,"../views/prd/prd-all"))
    },
   
}
// Acá exportamos el resultado
module.exports = prdController;