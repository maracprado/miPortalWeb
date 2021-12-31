const path = require('path');
const fs = require ('fs');
const url = require ('url');

function authMiddleware (req, res, next){
    if (req.originalUrl == "/login"){
        next();
    }else if (req.session.user == undefined){
        res.render (path.join(__dirname,"../src/views/login"))
    }else{
        loggedUser=req.session.loggedUser;
        next();
    }
}

module.exports = authMiddleware;