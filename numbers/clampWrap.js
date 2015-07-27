
/**
 * same as clamp() but returns max instead of min and vice versa  ([n] < min return max; [n] > max return min) 
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function clampWrap(value, min, max) {
    return (value < min) ? max : (value > max) ? min : value;
}
