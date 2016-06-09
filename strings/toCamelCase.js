/**
 * Sets the first character of each word to uppercase and removes all spaces 
 * @param {string} value
 */
function toCamelCase(value) {
    return value.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }).join("");
}
