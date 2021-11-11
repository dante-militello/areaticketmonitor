var request = require('request');
require('dotenv').config();
var exec = require('child_process').exec;

function check() {
	esperar = process.env.CHECKMS;
	eventoid = process.env.EVENTOID;

	var options = {
		'method': 'GET',
		'url': 'https://ventas.areaticket.com.ar/api2/v1/events/' + eventoid
	};

	request(options, function (error, response) {
		if (error) {
			console.log('Error al obtener la información.');
			console.log(error);
			setTimeout(check, esperar);

			return;
		}
		try {
			if (response.body) {
				estado = JSON.parse(response.body).performances[0].statusName;
				
				if (typeof estado !== 'undefined') {
					if (estado == "Disponible Pronto") {
						console.log("Disponible Pronto, reintentando...");
					}
					else {
						console.log("TICKETS DISPONIBLES!!!");
						exec('start /B "node" "alarma.mp3"');

						if (process.env.TGRAM == 1) {
							var requestOptions = {
								method: 'GET',
								redirect: 'follow'
							};

							var options = {
								'method': 'GET',
								'url': 'https://api.telegram.org/bot' + process.env.TOKENBOT + '/sendMessage?chat_id=' + process.env.TGRAMID + '&text=' + process.env.MENSAJE,
								'headers': {
								}
							};
							request(options, function (error, response) {
								if (error){
                 					console.log("Reintentando..."); // ?
									 console.log(error);
               					}
								else {
									console.log(response.body);
								}
							});

							esperar = process.env.ESPERARBETWEEN;
						}
					}
				}
			}

			setTimeout(check, esperar);
		}
		catch(e) {
			console.log("Error al procesar la información...");

			if (e.code === 'ETIMEDOUT') {
				console.log('Error de timeout, pero reintentamos!');
			}

			setTimeout(check, esperar);
		}
	});
}

check();
