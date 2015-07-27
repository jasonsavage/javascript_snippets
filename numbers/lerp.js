/**
 * Linear interpolation between two values
 * @param {Number} start
 * @param {Number} end
 * @param {Number} percent
 * @returns {number}
 */
function lerp(start, end, percent) {
    return start + (percent * (end - start));
}

//extra
function lerpVector2d(start, end, percent) {
    return {
        x : lerp(start.x, end.x, percent),
        y : lerp(start.y, end.y, percent)
    };
}

function lerpVector3d(start, end, percent) {
    return {
        x : lerp(start.x, end.x, percent),
        y : lerp(start.y, end.y, percent),
        z : lerp(start.z, end.z, percent)
    };
}
