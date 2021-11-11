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
    if (error) throw new Error(error);
    try {
      if (response.body) {
        try {
          estado = JSON.parse(response.body).performances[0].statusName;
        } catch (e) {
          console.log("No se pudo parsear, error en el sitio intento nuevamente...");
          if (e.code === 'ETIMEDOUT') {
            console.log('Timeout, pero reintentamos!');
          }
        }

        if (typeof estado !== 'undefined') {

          if (estado == "Disponible Pronto") {

            console.log("Disponible Pronto, reintentando...");

          } else {
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
                if (error) throw new Error(error);
                console.log(response.body);
              });

              esperar = process.env.ESPERARBETWEEN;
            }
          }

        }
        setTimeout(check, esperar);
      }
    }
    catch(e) {
         console.log("No se pudo parsear, error en el sitio intento nuevamente...");
    }
  });
}
check();
