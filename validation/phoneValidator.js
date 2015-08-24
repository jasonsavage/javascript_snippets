/**
 * Validates that the specifed value is a valid telephone number
 *
 * @param  value    value to validate
 * @return          boolean
 */
function phoneValidator (value) {
    var exp1 = new RegExp(/^[0-9]{10}$/);
    var exp2 = new RegExp(/^\(([0-9]{3})\)\s?[0-9]{3}[-][0-9]{4}$/);
    var exp3 = new RegExp(/^([0-9]{3})[.-]([0-9]{3})[.-]([0-9]{4})$/);

    if (typeof value !== 'undefined' && value !== null) {
          return ( exp1.test(value) || exp2.test(value) || exp3.test(value) );
    }
    //empty value is considered valid
    return true;
 }
