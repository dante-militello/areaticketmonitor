var request = require('request');
require('dotenv').config();
var exec = require('child_process').exec;

function check() {

  esperar = process.env.CHECKMS;
  eventoid = process.env.EVENTOID;

  var options = {
    'method': 'GET',
    'url': 'https://ventas.areaticket.com.ar/api2/v1/events/'+eventoid
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);

    if (response.body) {
      try {
        estado = JSON.parse(response.body).performances[0].statusName;
      } catch (e) {
        console.log("No se pudo parsear, error en el sitio intento nuevamente..."); // error in the above string (in this case, yes)!
      }

      if (typeof estado !== 'undefined') {
        if (estado == "Disponible Pronto") {
          console.log("Disponible Pronto");
          
        } else {
          console.log("TICKETS DISPONIBLES!!!");
          exec('start /B "node" "C:\\Users\\dante\\Desktop\\Proyectos\\areaticketmonitor\\alarma.mp3"');
          esperar = process.env.ESPERARBETWEEN;
        }
      }
      setTimeout(check, esperar);
    }
  });
}
check();