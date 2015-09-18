/**
 * Removes all properties on an object in memory instead of creating a new empty object.
 * @params {object} obj
 * @return {object}
 */
function cleanObject(obj) {
    Object.keys(obj).forEach(function (key){
        delete obj[key];
    });
    return obj;
}
