const path = require('path');

//base
console.log(__filename);

//Nombre de archivo
console.log(path.basename(__filename));

//Nombre de directorio
console.log(path.dirname(__filename));

//Extension de archivo
console.log(path.extname(__filename));

// Crear objeto de ruta
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenar rutas
//   ../test/hello.html
console.log(path.join(__dirname, 'test','hello.html'));

