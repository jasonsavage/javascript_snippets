//requires numbers/sign.js

/**
 * Same as lerp but instead the function will ensure that the speed never exceeds maxDelta
 * @param {Number} current
 * @param {Number} target
 * @param {Number} maxDelta
 * @returns {Number} calculated change to current
 */
function moveTowards(current, target, maxDelta) {
    if (Math.abs(target - current) <= maxDelta) {
        return target;
    }
    return current + sign(target - current) * maxDelta;
}
