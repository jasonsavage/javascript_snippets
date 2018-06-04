/* eslint-disable max-nested-callbacks */
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

// Local constants
const PORT = 8000;
const PUBLIC_DIRECTORY = './dist2/';

/**
 * Creates a simple server without using express
 */
const server = http.createServer(function (request, response) {
	const uri = url.parse(request.url).pathname;
	var filename = path.join(process.cwd(), PUBLIC_DIRECTORY, uri);

	const contentTypesByExtension = {
		'.html': 'text/html',
		'.css': 'text/css',
		'.webm': 'video/webm',
		'.jpg': 'image/jpeg',
		'.png': 'image/png',
		'.js': 'text/javascript'
	};

	fs.exists(filename, function (exists) {
		if (!exists) {
			return serverErrorContent('404 Not Found\n', response);
		}

		if (fs.statSync(filename).isDirectory()) {
			filename = path.join(filename, 'index.html');
		}

		fs.readFile(filename, 'binary', function (err, file) {
			if (err) {
				return serverErrorContent(err, response);
			}

			const contentType = contentTypesByExtension[path.extname(filename)];

			console.log('Serving: ' + filename + ' type: ' + contentType);
			return serverFileContent(file, contentType, response);
		});
	});
});

server.listen(PORT, function (err) {
	if (err) {
		return console.log('something bad happened', err);
	}

	console.log('Static file server running at\n  => http://localhost:' + PORT + '/\nCTRL + C to shutdown');
});

// Helpers
function serverErrorContent (err, response) {
	response.writeHead(500, {'Content-Type': 'text/plain'});
	response.write(err + '\n');
	response.end();
}

function serverFileContent (content, contentType, response) {
	var headers = {};
	if (contentType) { headers['Content-Type'] = contentType; }

	response.writeHead(200, headers);
	response.write(content, 'binary');
	response.end();
}
