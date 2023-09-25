
const app = require('./app')

const medias = require('./controllers/media');
const tipos = require('./controllers/tipo');
const productoras = require('./controllers/productora');
const directores = require('./controllers/director');
const generos = require('./controllers/genero');

app.delete('/api/v1/medias/:id', medias.eliminarMedia);

app.put('/api/v1/medias/:id', medias.editarMedia);

app.put('/api/v1/tipos/:id', tipos.editarTipo);

app.put('/api/v1/productoras/:id', productoras.editarProductora);

app.put('/api/v1/directores/:id', directores.editarDirector);

app.put('/api/v1/generos/:id', generos.actualizarGenero);


app.set('port',process.env.PORT || 4000)

app.listen(app.get('port'), () =>{


   
    
    console.log  ( `EL servidor arranco en el puerto: ${app.get('port')  }`  )
})