module.exports = {
    connection: (socket) => {
        console.log('Conectado - ' + socket.id)
    
        socket.on('sendMessage', data => {
            socket.broadcast.emit('receivedMessage', data)
        })
    }
}