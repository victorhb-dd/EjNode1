//Ejemplo de servidor Node básico y simple, con mensaje en la consola MSDOS
//Para ver la dirección web que está activada
var http = require('http');

http.createServer(function(peticion, respuesta){
    /* 
        Los 'Content-Type' pueden tener como valor 'text/plain' para texto plano y
        'text/html' para devolver una pagina Web
    */
    respuesta.writeHead( 200, {'Content-Type': 'text/plain'} );
    respuesta.write("Hola Mundo Node Js, hoy es Viernes");
    respuesta.end();
    
}).listen(3000, 'localhost');

console.log('El servidor se muestra en http://localhost:3000');