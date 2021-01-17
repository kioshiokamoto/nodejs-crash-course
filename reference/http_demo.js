const http = require('http');

//Crear objeto de servidor

http.createServer((req,res)=>{
    // Escribir respuesta
    res.write('Hola!');
    res.end();
}).listen(5000, ()=> console.log('Servidor funcionando!!'));
