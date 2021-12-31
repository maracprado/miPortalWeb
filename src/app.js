const express = require ('express');
const path = require ('path');
const methodOverride =  require('method-override');
const session =  require('express-session');
const mainRouter = require('./routes/mainRouter');
const prdRouter = require('./routes/prdRouter');
const logger = require('morgan');
const logMiddleware = require ('../middlewares/logsMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session( {secret: "Netops-PortalNetworkCore"}));
//app.use(logMiddleware);
app.use(authMiddleware);
app.use(function(req, res, next) {
    if (req.session.user != undefined){
        res.locals.loggedUser = req.session.user["username"];
    }    
    next();
  });

app.set('view engine', 'ejs');
app.set('views', './src/views');

// ROUTES
app.use("/", mainRouter);
app.use("/prd", prdRouter);





app.listen (3030, ()=>{ console.log("Express está corriendo en puerto 3030")})