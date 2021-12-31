// Acá nos falta nuestra fuente de datos
const fs = require('fs');
const path = require('path');
const bcryptjs = require ("bcryptjs");
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const session =  require('express-session');

// Acá nos falta un objeto literal con las acciones para cada ruta
const mainController = {
    getHome: (req,res) => {
        req.session.user = user;
        res.render (path.join(__dirname,"../views/home"))
    },
    getLogin: (req,res) => {
        res.render (path.join(__dirname,"../views/login"))

    },
    postLogin: (req,res) => {   

        user = users.find(user => {
            return user["username"] == req.body.username;
        })

        if ( (user == undefined) ){
            res.render (path.join(__dirname,"../views/login"),{loginError: "Credenciales incorrectas"})
        }
        else if (  bcryptjs.compareSync(req.body.password,user["password"]) == false ){
            res.render (path.join(__dirname,"../views/login"),{loginError: "Credenciales incorrectas"})
        }
        else{
            req.session.user = user;
            res.redirect ("/");
        }
    },
    getLogout: (req,res) => {   
        req.session.user = undefined;
        res.redirect ("/login");
    }
   
}
// Acá exportamos el resultado
module.exports = mainController;