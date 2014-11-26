/**
 * Validates that the specifed value contains only common characters
 * a-z A-Z 0-9 ! @ # $ % & ( ) - + = [ ] : ; " ' , . ? /
 *
 * @param  value    value to validate
 * @return          boolena
 */
function characterValidator (value) {
    if (typeof value !== 'undefined' && value !== null) {
        return /^[a-zA-Z0-9\s\!\@\#\$\%\&\(\)\-\+\=\[\]\:\;\"\'\,\.\?\/]*$/.test(value);
    }
    //empty value is considered valid
    return true;
}
