async function core() {

    function server() {

        console.log('[express] Express sendo iniciado...')
        require('./server.js')

    }

    function mongoDB() {

        console.log('[mongoDB] MongoDB sendo iniciada...')
        require('../services/mongodb.js')

    }

    server()
    mongoDB()

}

module.exports = { core }