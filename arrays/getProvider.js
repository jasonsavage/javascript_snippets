/**
 * Gets an array of objects that can be used in ng-options for a select dropdown.
 * NOTE: set ng-options="item.value as item.text for item in array" for proper list population.
 * @param {Array} array
 * @param {String} [textProp=undefined]
 * @param {String} [valueProp=undefined]
 * @returns {Array}
 */
function getProvider(array, textProp, valueProp) {
    return array.map(function (item) {
        if(!angular.isObject(item)) {
            return { text : item, value : item };
        } else {
            return { text : item[textProp], value : item[valueProp] };
        }
    });
}
