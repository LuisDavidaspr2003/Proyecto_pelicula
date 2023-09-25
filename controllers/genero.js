const Genero = require('../models/genero')
const { request, response } = require('express')

const createGenero = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre, descripcion } = req.body
    try{
        const generoDB = await Genero.findOne({ nombre })
        if(generoDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        }
        
        const datos = {
            nombre,
            descripcion
        }

        const genero = new Genero(datos)

        await genero.save()

        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

/**
 * Consultar todos los géneros
 */

const consultarGeneros = async (req, res) => {
    try {

      const generos = await Genero.find();
  
     
      if (generos.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron géneros.' });
      }
  
      
      res.status(200).json(generos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al consultar los géneros.' });
    }
  };

const actualizarGenero = async (req, res) => {
  try {
    const generoID = req.params.id; 
    const { nombre, descripcion } = req.body; 

   
    const genero = await Genero.findById(generoID);

    if (!genero) {
      return res.status(400).json({ mensaje: 'Género no encontrado' });
    }

    
    genero.nombre = nombre;
    genero.descripcion = descripcion;

    
    await genero.save();

    res.status(200).json(genero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el género' });
  }
};



module.exports = {
    createGenero,consultarGeneros,actualizarGenero,
}