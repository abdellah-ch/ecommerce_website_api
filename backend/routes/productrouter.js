const router = require('express').Router()

const productcontroller = require('../controllers/productcontroller')

router.route('/products')

    .get(productcontroller.getProducts)

    .post(productcontroller.createProduct)

router.route('/products/:id')

    .delete(productcontroller.deleteProduct)
    
    .put(productcontroller.updateProduct)

module.exports = router