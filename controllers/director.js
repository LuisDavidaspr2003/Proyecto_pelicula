const Director = require('../models/director')
const { request, response } = require('express')

const createDirector = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre, } = req.body
    try{
        const directorDB = await Director.findOne({ nombre })
        if(directorDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        }
        
        const datos = {
            nombre,
            
        }

        const director = new Director(datos)

        await director.save()

        return res.status(201).json(director)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }


    

}


const editarDirector = async (req = request, res = response) => {
    try {
        const directorID = req.params.id;
        const { nombre } = req.body;

        
        const director = await Director.findById(directorID);

        if (!director) {
            return res.status(404).json({ mensaje: 'Director no encontrado' });
        }

        
        if (nombre) {
            director.nombre = nombre;
        }

        
        await director.save();

        return res.status(200).json(director);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: 'Error al actualizar el director' });
    }

}

module.exports = {
    createDirector,editarDirector
}