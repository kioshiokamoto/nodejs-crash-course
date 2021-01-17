const fs = require('fs');
const path = require('path');

//Crear carpeta

/* fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err) throw err;
    console.log('Carpeta creada')
}) */

//Crear y escribir archivo

/* fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Ingresando texto',(err)=>{
    if(err) throw err;
    console.log('Archivo creado y escrito');

    //File append
    fs.appendFile(path.join(__dirname,'/test','hello.txt'),'\n2da vezz',(err)=>{
        if(err) throw err;
        console.log('Archivo escrito');
    })
    
}) */

//Leer archivo

/* fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err,data){
    if(err) throw err;
    console.log(data);
})
 */

//Renombrar archivo

/* fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),function(err,data){
    if(err) throw err;
    console.log('Archivo cambiado');
}) */



