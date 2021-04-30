const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const database = mongoose.connection;
database.on('error', (err) => { 
    
    console.log('[mongoDB] Houve um erro ao efetuar a conexão')
    console.log(err)

})

database.once('open', () => {

    console.log('[mongoDB] Conexão efetuada.')

})