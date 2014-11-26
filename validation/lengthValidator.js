/**
 * Validates that a value's length is greater than or equal to [min] and less than or equal to [max]
 *
 * @param  value    value to validate
 * @param  min      min length
 * @param  max      max length
 * @return          boolean
 */
function lengthValidator (value, min, max) {
    if (typeof value !== 'undefined' && value !== null) {
        return (value.length >= min && value.length <= max );
    }
    //empty value is considered valid
    return true;
}

/**
 * Validates that a value's length is greater than [min] and less than [max]
 *
 * @param  value    value to validate
 * @param  min      min length
 * @param  max      max length
 * @return          boolean
 */
function lengthValidatorInner (value, min, max) {
     if (typeof value !== 'undefined' && value !== null) {
        return (value.length > min && value.length < max );
    }
    //empty value is considered valid
    return true;
}
