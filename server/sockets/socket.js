const { io } = require('../server');

// on : Escucha al cliente
io.on('connection', (client) => {
	console.log('Usuario conectado');

	client.emit('enviarMensaje', {
		usuario: 'Admin',
		mensaje: 'Bienvenido a mi app!',
	});

	client.on('disconnect', () => {
		console.log('Uusuario desconectado');
	});

	// Escuchar al cliente

	client.on('enviarMensaje', (data, callback) => {
		console.log(data);

		// broadcast para mandarle a todo el mundo
		client.broadcast.emit('enviarMensaje', data.mensaje);

		// if (mensaje.usuario) {
		// 	callback({
		// 		resp: 'Todo salió ok',
		// 	});
		// } else {
		// 	callback({
		// 		resp: 'Todo salio mal',
		// 	});
		// }
	});
});
