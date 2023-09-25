const mongoose = require('mongoose')


const mongoConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
   
        })
    console.log('Conexion Completada')
    } catch (e) {

        console.log('Error de Conexion', e)
        throw new Error('Error de conexion')
    }
    
}   
module.exports = {mongoConn}