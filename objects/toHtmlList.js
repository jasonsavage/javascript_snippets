/**
 * Converts an object to a definition list (<dl>)
 * @param {object} obj
 * @returns {string}
 */
function toHtmlList(obj) {
    return (
        '<dl>' + 
            Object.keys(obj).map(function (key) {
                return '<dt>' + key + '</dt><dd>' + obj[key] + '</dd>';
            }).join('') + 
        '</dl>'
    );
}
