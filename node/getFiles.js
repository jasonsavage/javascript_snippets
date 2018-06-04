const path = require('path');
const fs = require('fs');

/**
 * Recursively loop though directory and find all files whose name matches pattern
 * @param {string} dir
 * @param {array} files
 * @param {RegExp} pattern
 * @returns {array}
 */
function getFiles (dir, files, pattern) {
	fs.readdirSync(dir).forEach(name => {
		let dirPath = path.join(dir, name);
		let stat = fs.statSync(dirPath);

		if(stat.isDirectory()) {
			getFiles(dirPath, files, pattern);
		} else {
			if(pattern.test(name)) {
				files.push(dirPath);
			}
		}
	});
	return files;
}
