const IMG_DIR = [process.env.PUBLIC_URL, 'assets', 'img'];
const PC_IMG_DIR = [process.env.PUBLIC_URL, 'assets', 'img_pc'];
const SVG_DIR = [process.env.PUBLIC_URL, 'assets', 'svg'];
const VID_DIR = [process.env.PUBLIC_URL, 'assets', 'video'];


const INT_IMG_DIR = ['internal', 'img', 'bkpnew'];
const INT_SVG_DIR = ['internal', 'svg'];
const INT_VID_DIR = ['internal', 'video', 'bkpnew'];

/**
 * Path
 */
const assetPaths = {
	img: () => build(IMG_DIR, Array.prototype.slice.call(arguments)),
	svg: () => build(SVG_DIR, Array.prototype.slice.call(arguments)),
	video: () => build(VID_DIR, Array.prototype.slice.call(arguments)),

	internal: () => ({
        img: () => build(INT_IMG_DIR, Array.prototype.slice.call(arguments)),
        video: () => build(INT_VID_DIR, Array.prototype.slice.call(arguments)),
        svg: () => build(INT_SVG_DIR, Array.prototype.slice.call(arguments))
	})
};

function build (prefix, path) {
	const result = [];
	prefix.forEach((value, index) => {
		if (path[index] !== value) {
			result.push(value);
		}
	});
	return result.concat(path).join('/');
}

//export module
export default assetPaths;
