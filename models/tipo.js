const { Schema, model } = require('mongoose')
const TipoSChema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre de tipo de contenido requerido'],
        minlength: 1
    },
   
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Tipo', TipoSChema)