const { Router } = require('express')
const { createDirector} = require('../controllers/director')
const { editarDirector } = require('../controllers/director')




const router = Router()

/**
 * Crear una genero
 */
router.post('/', createDirector)


/**
 * Consultar todos los géneros
 */
router.put('/', editarDirector)



module.exports = router
