const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const { use } = require('./src/routes');

// Iniciando a App
const app = express();

// Permitir que eu envie dados para a aplicacao no formato json
app.use(express.json());


// Liberando acesso para todo mundo poder acessar a API
app.use(cors());


// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    }
);

require('./src/modules/Product');




//rota
app.use('/api', require('./src/routes'));



app.listen(3001);