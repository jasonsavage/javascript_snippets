/**
 * helps to prevent users from hacking the FE and running malicious scripts
 * NOTE: this removes non-word characters from the string
 * ...  (ex. ..\..\..\myvirus.txt -> myvirustxt.png)
 * @param filename
 * @returns {string}
 */
export function sanitizeFilename (filename='') {

	if (filename.match(/\.gif/)) {
		return filename.replace(/\.gif/, '').replace(/\W/g, '') + '.gif';
	} else if (filename.match(/\.jpg/)) {
		return filename.replace(/\.jpg/, '').replace(/\W/g, '') + '.jpg';
	}

	return filename.replace(/\.png/, '').replace(/\W/g, '') + '.png';
}
