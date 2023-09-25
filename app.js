const express = require('express')
const { mongoConn } = require('./databases/configuracion')
const dotenv = require('dotenv').config()

mongoConn()

const app = express()


app.use(express.json())


const generos = require('./routes/genero')

app.use('/api/v1/generos', generos)
//---------------------------------------------------------------------------

const directores = require('./routes/director')

app.use('/api/v1/directores', directores)
//---------------------------------------------------------------------------
const productoras = require('./routes/productora')

app.use('/api/v1/productoras', productoras)
//---------------------------------------------------------------------------
const tipos = require('./routes/tipo')

app.use('/api/v1/tipos', tipos)

//---------------------------------------------------------------------------

const medias = require('./routes/media')

app.use('/api/v1/medias', medias)








module.exports = app