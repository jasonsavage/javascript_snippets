

/**
 * Flattens an object to a single level by converting nested objects into paths on the root object.
 * @param {object} obj
 * @return {object}
 *
 * @example
 * {
 *   name : "Jason",
 *   age : 34,
 *   colors : ["red", "blue", "green"],
 *   address : {
 *     street : "123 West Dr.",
 *     location : {
 *       long : "2345",
 *       lat : "23456"
 *     }
 *   }
 * }
 * converts to
 * {
 *     name: "Jason", 
 *     age: 34, 
 *     colors: "red|blue|green", 
 *     address$street: "123 West Dr.", 
 *     address$location$long: "2345",
 *     address$location$lat: "23456"
 * }
 */
function flattenObject(obj) {
    var result = {};
    (function _innerFlatten(currentObj, path, rootObj) {
        path = (path !== "") ? path + "$" : "";
        Object.keys(currentObj).forEach(function (key) {
            var item = currentObj[key];
            if( typeof item === "object" && ! Array.isArray(item) ) {
                _innerFlatten(item, path + key, rootObj); 
            } else {
                rootObj[path + key] = Array.isArray(item) ? item.join("|") : item;
            }
        });
    }(obj, "", result));
    return result;
}
