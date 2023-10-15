const Media = require('../models/media')
const { request, response } = require('express')




const createMedia = async (req = request, res = response) => {
    console.log(req.body)

    const { serial,titulo,sinopsis,url,imagen,añodeEStreno,genero,director,productora,tipo} = req.body
    try{
        const generoDB = await Media.findOne({ serial })
        if(generoDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        } 
        
        const datos = {
            serial,titulo,sinopsis,url,imagen,añodeEStreno,genero,director,productora,tipo
        }

        const media = new Media(datos)

        await media.save()

        return res.status(201).json(media)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}


const consultarMedia = async (req, res) => {
    try {
        const medias = await Media.find()
            .populate('genero', 'nombre')
            .populate('director', 'nombre')
            .populate('productora', 'nombre')
            .populate('tipo', 'nombre')
            .exec();

        if (medias.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron géneros.' });
        }

        const mediasConNombres = medias.map(media => {
            return {
                serial: media.serial,
                titulo: media.titulo,
                sinopsis: media.sinopsis,
                url: media.url,
                imagen: media.imagen,
                fechaCreacion: media.fechaCreacion,
                fechaActualizacion: media.fechaActualizacion,
                añodeEstreno: media.añodeEstreno,
                genero: media.genero.nombre,
                director: media.director.nombre,
                productora: media.productora.nombre,
                tipo: media.tipo.nombre,
                id: media._id
            };
        });

        res.status(200).json(mediasConNombres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al consultar las medias.' });
    }
};




const editarMedia = async (req = request, res = response) => {
    try {
        const mediaID = req.params.id;
        const { serial, titulo, sinopsis, url, imagen, añoDeEstreno, genero, director, productora, tipo } = req.body;

        
        const media = await Media.findById(mediaID);

        if (!media) {
            return res.status(404).json({ mensaje: 'Media no encontrada' });
        }

        if (serial) {
            media.serial = serial;
        }
        if (titulo) {
            media.titulo = titulo;
        }
        if (sinopsis) {
            media.sinopsis = sinopsis;
        }
        if (url) {
            media.url = url;
        }
        if (imagen) {
            media.imagen = imagen;
        }
        if (añoDeEstreno) {
            media.añoDeEstreno = añoDeEstreno;
        }
        if (genero) {
            media.genero = genero;
        }
        if (director) {
            media.director = director;
        }
        if (productora) {
            media.productora = productora;
        }
        if (tipo) {
            media.tipo = tipo;
        }

        await media.save();

        return res.status(200).json(media);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: 'Error al actualizar la entrada de Media' });
    }
};

const eliminarMedia = async (req, res) => {
    try {
      const mediaID = req.params.id;
  
      const result = await Media.deleteOne({ _id: mediaID });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ mensaje: 'Media no encontrada' });
      }
  
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ mensaje: 'Error al eliminar la entrada de Media' });
    }
  };
  
module.exports = {
   createMedia, editarMedia,consultarMedia,eliminarMedia
};

