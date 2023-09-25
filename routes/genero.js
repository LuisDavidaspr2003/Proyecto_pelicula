const { Router } = require('express')
const { createGenero } = require('../controllers/genero')
const { consultarGeneros } = require('../controllers/genero')
const { actualizarGenero } = require('../controllers/genero')




const router = Router()


router.post('/', createGenero)



router.get('/', consultarGeneros)


router.put('/',actualizarGenero)





module.exports = router
