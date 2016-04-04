
// http://bluebirdjs.com/docs/getting-started.html
var Promise = require('bluebird');

/**
 * Loops through an array of image urls and preload them into the browser cache.
 *
 * @param {array} imageUrls - an array of image urls to preload
 * @returns {array} - bluebird promise objects
 */
function preloadImages (imageUrls) {
	imageUrls = imageUrls || [];
	return imageUrls.map(function (url) {
		return new Promise(function(accept, reject) {
			var temp = new Image();
			temp.onload = accept;
			temp.onerror = reject;
			//start load
			temp.src = url;
		});
	});
}
