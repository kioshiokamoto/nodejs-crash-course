const os = require('os');

//Platform
console.log(os.platform());

//Aquitectura CPU
console.log(os.arch());

//CPU CORE INFO
console.log(os.cpus());

//Memoria libre
console.log(os.freemem()/(1024*1024));


//Memoria total
console.log(os.totalmem()/(1024*1024));

//Home dir
console.log(os.homedir());

//Tiempo activo
console.log(os.uptime()/(60*60));



