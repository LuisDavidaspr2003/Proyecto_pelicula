const { Schema, model } = require('mongoose')
const DirectorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Ingresar el nombre del director'],
        minlength: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Director', DirectorSchema)