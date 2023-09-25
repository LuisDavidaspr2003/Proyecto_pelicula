const { Router } = require('express')
const { createTipo } = require('../controllers/tipo')
const { editarTipo } = require('../controllers/tipo')
const router = Router()

/**
 * Crear una genero
 */
router.post('/', createTipo)


/**
 * Consultar todos los géneros
 */
router.put('/', editarTipo)



module.exports = router
