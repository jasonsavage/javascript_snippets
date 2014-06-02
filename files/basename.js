
/**
 * Gets the file name from a path 
 * @param {string} path
 */
function basename( path )
{
    path = path.replace(/\\/g, '/');
    var pos = Math.max( 0, path.lastIndexOf('/') + 1);
    return path.substring(pos);  
}