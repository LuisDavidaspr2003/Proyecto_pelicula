const { Router } = require('express')
const { createMedia} = require('../controllers/media')
const { consultarmedia} = require('../controllers/media')
const { editarMedia} = require('../controllers/media')
const { eliminarMedia} = require('../controllers/media')

const router = Router()

router.post('/', createMedia)



router.get('/', consultarmedia)


router.put('/',editarMedia)

router.delete('/', eliminarMedia)


module.exports = router