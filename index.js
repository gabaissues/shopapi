require('dotenv').config()
const { core } = require('./src/functions/core.js')

core().then(() => {

    console.log('[core] Core iniciado com sucesso.')

}).catch(err => {

    console.log('[core] Houve um erro ao iniciar o core.')
    console.log(err)

})