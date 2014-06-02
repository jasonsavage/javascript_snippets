
/**
 * Get the extention from a path or filename 
 * @param {string} path
 */
function extension(path)
{
    var pos = path.lastIndexOf('.');
    return pos == -1 ? '' : path.substring(pos); 
}