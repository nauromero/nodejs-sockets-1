var socket = io();

// Escuchar informacion: on
socket.on('connect', function () {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('perdimos conexion con el servidor');
});

// Enviar informacion: emit

socket.emit(
	'enviarMensaje',
	{
		usuario: 'Nahuel Romero',
		mensaje: 'Hola Mundo',
	},
	function (response) {
		console.log('Respuesta sever: ', response.resp);
	}
);

socket.on('enviarMensaje', (mensaje) => {
	console.log('Servidor: ', mensaje);
});
