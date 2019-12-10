const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');

// Setting
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'))

/*
    console.log('dirname: '+__dirname + '/public');
    console.log(path.join(__dirname, 'public')); // de esta forma automaticamente se encarga de ver en que sistema operativo estamos
*/
// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando el Servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor inicializado en el puerto ${app.get('port')}`);
})