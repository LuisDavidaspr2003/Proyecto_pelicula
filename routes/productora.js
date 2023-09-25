const { Router } = require('express')
const { createProductora } = require('../controllers/productora')
const { editarProductora } = require('../controllers/productora')
const router = Router()

/**
 * Crear una genero
 */
router.post('/', createProductora)


/**
 * Consultar todos los géneros
 */
router.put('/', editarProductora)



module.exports = router
