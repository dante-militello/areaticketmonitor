<h1> Area Ticket Monitor </h1>
<hr></hr>

<p>El monitoreo fue creado originalmente para estar atento ante la apertura de la venta de las entradas para el evento del Quilmes Rock 2022.</p>

<h1>¿Como utilizarlo?</h1>

1. Clonar repositorio.
2. Modificar archivo .env poniendo el ID del evento a la derecha de "EVENTOID" que se consigue de la siguiente manera: https://www.loom.com/share/7e6e9d0851184023a40b39378b3b1f29
3. Ejecutar archivo .js con node desde el terminal escribiendo node index.js

* Es necesario tener instalado <a href="https://nodejs.org/en/">NODE.JS</a>
* Es necesario hacer npm install antes de utilizar la app.

<h2>Configuralo editando el archivo .env</h2>

<p>CHECKMS (expresado en milisegundos) para indicar cada cuanto tiempo chequear.</p>
<p>ESPERARBETWEEN (expresado en milisegundos) para indicar cuanto "descansar" despues de la primera alarma.</p>
<p>EVENTOID id del evento (numero de 4 cifras) que se consigue con lo indicado en el video anterior, el evento del quilmes rock es 1072</p>
<p>TGRAM en 1 es ACTIVADO en 0 es DESACTIVADO (para que envie un mensaje a tu grupo de telegram, <a href="https://medium.com/javarevisited/sending-a-message-to-a-telegram-channel-the-easy-way-eb0a0b32968">mas info acá</a>)</p>
<p>TGRAMID=elnombredetubot</p>
<p>TOKEBOT=eltokendelbot</p>
<br><br>

Twitter: <a href="https://twitter.com/dantemilitello">@dantemilitello</a>
Tweet: <a href="https://twitter.com/dantemilitello/status/1457557227838091264">Tweet Explicativo</a>
