"use_strict";

/**
 * replaces {0}, {1}, {2}, etc with any arguments passed to the method in the same order 
 * @param {string} msg
 * @param {...} args
 */
function substitute(msg/*, ...args*/)
{
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    
    var i = args.length;
    while(i--) msg = msg.replace("/\{"+i+"\}/g", args[i]);
    return msg;
}