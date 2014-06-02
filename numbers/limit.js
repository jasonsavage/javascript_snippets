
/**
 * limits the value so it is between min and max ([n] < min return min; [n] > max return max)
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
function limit(value, min, max)
{
    return Math.max(Math.min(value, max), min);
}