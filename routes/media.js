
const { Router } = require('express');
const { createMedia } = require('../controllers/media');
const { consultarMedia } = require('../controllers/media');
const { editarMedia } = require('../controllers/media');
const { eliminarMedia } = require('../controllers/media');

const router = Router();

// Ruta para crear un nuevo medio
router.post('/', createMedia);

// Ruta para consultar todos los medios
router.get('/', consultarMedia);

// Ruta para editar un medio por su ID
router.put('/:id', editarMedia);

// Ruta para eliminar un medio por su ID
router.delete('/:id', eliminarMedia);

module.exports = router;
