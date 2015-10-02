/**
 * Populates a string with the values from the supplied object.
 * @param {string} template
 * @param {object} data
 * @return {string}
 */
function substituteObj(template, data) {
    Object.keys(data).forEach(function (key) {
        template = template.replace(new RegExp("{{"+key+"}}","g"), data[key]);
    });
    return template;
}
