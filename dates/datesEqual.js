/**
 * Checks whether to date objects are equal
 *
 * @param  dateA    first date to compare
 * @param  dateB    second date to compare
 * @return          boolean if dates are equal
 */
function datesEqual(dateA, dateB) {
    return (
        dateA instanceof Date &&
        dateB instanceof Date &&
        dateA.toDateString() === dateB.toDateString()
    );
}
