const Productora = require('../models/productora')
const { request, response } = require('express')

const createProductora = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre,slogan,descripcion } = req.body
    try{
        const productoraDB = await Productora.findOne({ nombre })
        if(productoraDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        }
        
        const datos = {
            nombre,
            slogan,
            descripcion
            
        }

        const productora = new Productora(datos)

        await productora.save()

        return res.status(201).json(productora)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
  

}


const editarProductora = async (req = request, res = response) => {
    try {
        const productoraID = req.params.id;
        const { nombre } = req.body;

     
        const productora = await Productora.findById(productoraID);

        if (!productora) {
            return res.status(404).json({ mensaje: 'Productora no encontrada' });
        }

       
        if (nombre) {
            productora.nombre = nombre;
        }

       
        await productora.save();

        return res.status(200).json(productora);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: 'Error al actualizar la productora' });
    }
}
module.exports = {
    createProductora,editarProductora
}