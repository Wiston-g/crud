const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');



// initializations
const app = express();

//settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views')); 

app.engine('.hbs',exphbs ({
    defaultLayout: 'main',
    layoutDir:path.join (app.get('views'),'layouts'),
    partialsDir:path.join (app.get('views'), 'partials'),
    extname:'.hbs'

}));
app.set('view engine', '.hbs')

//middlewares

app.use(express.urlencoded({extended: false}));


//global varables


//routes

app.get('/', (req, res) =>{
    res.render('index')
});

//static files

app.use(express.static(path.join( __dirname, 'public'))); 


module.exports = app;