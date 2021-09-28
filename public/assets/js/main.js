var socket = io();

socket.on('connect', function () {
    console.log('conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('desconectado del servidor');
});

socket.emit('mensaje', { nombre: 'Ixe' });

socket.on('mensaje', function (payload) { console.log('Mensaje:', JSON.stringify(payload, null, 2)) });
