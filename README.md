<h1> Area Ticket Monitor </h1>
<hr></hr>

<p>El monitoreo fue creado originalmente para estar atento ante la apertura de la venta de las entradas para el evento del Quilmes Rock 2022.</p>

<h1>¿Como utilizarlo? (Avanzado)</h1>

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

<h1>¿Como utilizarlo? (Easy)</h1>

1. Bajar node.js desde https://nodejs.org/en/ versión CURRENT.
2. Instalar NODE.
3. Crear una carpeta en cualquier lado.
5. Ingresar a la carpeta dar click secundario a la carpeta y poner "abrir en terminal....." </br>
![image](https://user-images.githubusercontent.com/36249892/140856894-a9aa2f40-eb14-424f-be56-68d506acfc3b.png)

6. Cuando se abra el terminal (la consola negra) escribir node -v y presionar ENTER. (Si el resultado es algo como v14.18.0) entonces NODE está instalado.</br>
![image](https://user-images.githubusercontent.com/36249892/140856864-2dbfeef1-e9ad-4822-85ae-efb16684908c.png)

7. Descargar este proyecto: </br>
![image](https://user-images.githubusercontent.com/36249892/140856837-76a07408-8ebc-41ef-9213-1b17375cd745.png)

8. Descomprimir todos los archivos del ZIP dentro de la carpeta nueva.</br>
![image](https://user-images.githubusercontent.com/36249892/140857285-73d3f737-56d7-4fdc-9ef9-766fa5977eb3.png)

9. Abrir el terminal y escribir "npm install" y luego ENTER (esto debería hacer un proceso de actualización, deberías esperar a que termine)

10. Una vez finalizado el paso 9 escribir "node index.js" y presionar ENTER.</br>
![image](https://user-images.githubusercontent.com/36249892/140857624-594ba690-f393-45b2-8d33-f4a84bb237c5.png)

Luego de esto debería comenzar a funcionar, el mensaje que se repetirá cada un minuto es "Disponible Pronto, reintentando...", en el momento que se disponibilice el ticket del dia 30 se ejecutará el MP3 con el sonido.


Twitter: <a href="https://twitter.com/dantemilitello">@dantemilitello</a>
Tweet: <a href="https://twitter.com/dantemilitello/status/1457557227838091264">Tweet Explicativo</a>
