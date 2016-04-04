/**
 * Given an object and a path through the object, this will return the matching value or an empty string.
 * Example:
 * 		let obj = { property : { location : { person : 'Foo Bar' } } };
 * 		parseValueFromNamespace( obj, 'property.location.person') === 'Foo Bar';
 *
 * @param {object} obj
 * @param {string} namespace
 * @returns {string}
 */
export function parseValueFromNamespace(obj, namespace) {
	var ref = obj;
	namespace.split('.').forEach((key) => {
		ref = ref && ref.hasOwnProperty(key) ? ref[key] : '';
	});
	return ref;
}
