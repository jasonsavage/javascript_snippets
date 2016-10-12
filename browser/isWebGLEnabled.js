/**
 * Detect if WebGl is enabled in the browser
 * From http://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
 */
function isWebGLEnabled () {
    var canvas = document.createElement('canvas');
    try { gl = canvas.getContext("webgl"); }
    catch (x) { gl = null; }

    if (gl == null) {
        try { gl = canvas.getContext("experimental-webgl"); experimental = true; }
        catch (x) { gl = null; }
    }
    return !!gl;
}
