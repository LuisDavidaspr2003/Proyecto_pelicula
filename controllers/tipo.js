const Tipo = require('../models/tipo')
const { request, response } = require('express')

const createTipo = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre,descripcion } = req.body
    try{
        const tipoDB = await Tipo.findOne({ nombre })
        if(tipoDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        }
        
        const datos = {
            nombre,
            descripcion
            
        }

        const tipo = new Tipo(datos)

        await tipo.save()

        return res.status(201).json(tipo)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}
const editarTipo = async (req = request, res = response) => {
    try {
        const tipoID = req.params.id;
        const { nombre } = req.body;

        const tipo = await Tipo.findById(tipoID);

        if (!tipo) {
            return res.status(404).json({ mensaje: 'Tipo no encontrado' });
        }

        if (nombre) {
            tipo.nombre = nombre;
        }

     
        await tipo.save();

        return res.status(200).json(tipo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: 'Error al actualizar el tipo' });
    }
};



module.exports = {
    createTipo,editarTipo
}