"use_strict";

/**
 * A simple US currency formatter 
 * @param {Object} value
 */
function toUSCurrency(value) { 
    //check if valid
    var str = value.toString(),
        pattern = /^-?(\d+)\.?(\d+)?$/,
        matches = str.match(pattern);
    
    if(matches && matches.length) {
      var n = str.charAt(0) === "-" ? "-" : "",
          a = matches[1], //first group
          b = matches[2]; //second group
      //commas
      a = Number(a).toLocaleString();
      //decimal
      b = (typeof b !== "undefined") ? ((b.length > 1) ? b.substr(0, 2) : b + "0") : "00";
      return "$" + n + a + "." + b;
    }
    return "$0.00";
};
