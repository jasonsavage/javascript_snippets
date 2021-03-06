/**
 * formats [value] into a string with commas (ex. 10000 -> 10,000)
 * @param {number} value
 * @param {boolean} round
 */
function addCommas(value, round) {
    round = (round !== null) ? round : true;

    var dec = "";
    var numStr;
    if (!round)
    {
        numStr = value.toString();
        if(numStr.indexOf(".") !== -1)
            dec = "." + numStr.split(".").pop();
    }

    value = Math.floor(value);
    numStr = value.toString();

    var str = "";
    var len = numStr.length;

    for (var i = 0; i < len; i++)
    {
        if (((len - i) % 3 ) === 0 && i !== 0)
            str += ",";

        str += numStr.charAt(i);
    }

    return str + dec;
}

/**
 * Version 2
 * @param {number} x
 */
function formatCommas(x) {
    var s = "";
    for (var i=x.length-1; i>=0; i--){
        s = x[i] + s;
        if (i > 0 && (i - x.length) % 3 === 0 && x[i-1] !== '-') {
            s = "," + s;
        }
    }
    return s;
}
