
/**
 * Pages array items based on current page and page size
 * @param {Array} results
 * @param {Number} page
 * @param {Number} pageSize
 * @returns {Array}
 */
function paginate(array, page=0, pageSize=10) {
    var startIndex = page * pageSize,
        endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
}
