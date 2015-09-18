/**
 * Concats 2 arrays together by adding all items in srcArray to the end of dstArray and returns dstArray.
 * NOTE: this method differes from Array.concat in that it does not create a new array.
 * @param {Array} dstArray
 * @param {Array} srcArray
 * @returns {Array}
 */
function extendArray(dstArray, srcArray) {
    dstArray.push.apply(dstArray, srcArray);
    return dstArray;
}
