const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	/* if (req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
			res.end(content);
		});
	}
	if (req.url === '/about') {
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
			res.end(content);
		});
	}
	if (req.url === '/api/users') {
		const users = [
            {name: 'Bob Smith', age: 40},
            {name: 'Alan Pou', age: 60},
            {name: 'Kioshi O', age: 20},
        ]
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(users));
    } */

	//Build file path
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

	//Extension del archivo
	let extname = path.extname(filePath);

	//Inicializar contenido
	let contentType = 'text/html';

	// Verificar extension y settear contenido
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
		default:
			break;
	}

	//Leer archivo
	fs.readFile(filePath, (err, content) => {
		if (err) {
			if ((err.code = 'ENONENT')) {
				//Pagina no encontrada
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-type': 'text/html' });
                    res.end(content, 'utf8');
				});
			} else{
                //Otro error de servidor
                res.writeHead(500);
                res.end(`Error de servidor: ${err.code}`);
            }

		}else{
            //Exito!
            res.writeHead(200, { 'Content-type': contentType });
            res.end(content, 'utf8');
        }
	});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
