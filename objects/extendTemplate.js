/**
 * Copies the values from the src object to the dst object if the property exists on the template object
 * @param {object} template
 * @param {object} dst
 * @param {object} src
 * @returns {object} dst
 */
function extendTemplate(template, dst, src) {
  Object.keys(template).forEach(function (key) {
      if(isObject(template[key]) && !Array.isArray(template[key])) {
          dst[key] = {};
          src[key] = src[key] || {};
          extendsTemplate(template[key], dst[key], src[key]);
      } else {
          dst[key] = (isObject(src) && src.hasOwnProperty(key)) ? src[key] : undefined;
      }
  });
  return dst;
}

function isObject(value) {
    // http://jsperf.com/isobject4
    return value !== null && typeof value === 'object';
}
