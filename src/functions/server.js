const express = require('express')
const cors = require('cors')

const app = express()
app.listen(process.env.PORT || 3333, () => console.log('[express] Express iniciado.'))

app.use(express.json())
app.use(cors())

app.use('/products', require('../routes/products.js'))