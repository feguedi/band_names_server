require('dotenv').config()
const path = require('path')
const Express = require('express')

const port = Number(process.env.PORT) || 3000
const publicPath = path.resolve(__dirname, 'public')
const app = Express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', cliente => {
    console.log('Cliente conectado:', cliente.id || ':)')
    cliente.on('disconnect', () => console.log('Se desconectó', cliente.id || ':('))

    cliente.on('mensaje', mensaje => {
        console.log('Mensaje:', JSON.stringify(mensaje, null, 2))
        cliente.emit('mensaje', { mensaje: 'OK' })
    })
})

app.use(Express.static(publicPath))

server.listen(port, () => console.log('Servidor en puerto', port))
