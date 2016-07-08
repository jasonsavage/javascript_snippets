/**
  * Fixes some formatting issue to make the supplied string more readable
  * @param {string} value
  * @returns {string}
  */
function prettyPrint (value) {
    return value
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/(\D)(\d)/g, '$1 $2')
        .replace(/(\d)(\D)/g, '$1 $2');
 }
