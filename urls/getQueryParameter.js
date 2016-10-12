/**
 * Gets the value of a query string parameter by name from a url
 * @see https://github.com/googlevr/vrview/blob/master/src/util.js
 */
function getQueryParameter (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
