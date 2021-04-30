const router = require('express').Router();
const mongoose = require('mongoose')

const { product } = require('../schema/product.js')
const Product = mongoose.model('Product', product)

router.get('/', async (req, res) => {

    if(req.body.name) {

        const product = await Product.findOne({ name: req.body.name })
        if(product === null) return res.status(404).send('Produto não encontrado.')

        res.json(product)
        
    } else {

        const products = await Product.find()
        res.json(products)

    }

})

router.post('/', async (req, res) => {

    if(!req.body.name || !req.body.price || !req.body.description) return res.status(401).send('Body ínvalido')
    const products = await Product.find()

    if(products.map(a => a.name).indexOf(req.body.name) > -1) return res.status(401).send('Produto já existente.')
    const produto = new Product(req.body)

    produto.save().then(() => res.status(200).send('Produto criado')).catch(console.log)

})

router.put('/', async (req, res) => {

    if(!req.body.name && !req.body.price && !req.body.description) return res.status(401).send('Body inválido.')
    await Product.findOneAndUpdate(req.body.name, req.body.update)

    res.status(200).send('Produto atualizado.')

})

router.delete('/', async (req, res) => {

    if(!req.body.name) return res.status(404).send('Produto não encontrado.')
    await Product.findOneAndDelete(req.body.name).then(() => res.status(200).send('Produto deletado')).catch(console.log)

})

module.exports = router;