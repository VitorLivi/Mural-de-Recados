module.exports = {
    connection: (socket) => {
        console.info('Conectado - ' + socket.id)

        socket.on('sendMessage', data => {
            socket.broadcast.emit('receivedMessage', data)
        })

        socket.on("disconnect", () => {
            console.info(`Client saiu [id=${socket.id}]`);
        });
    }
}