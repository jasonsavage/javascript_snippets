/**
 * Checks whether dateA is after dateB
 *
 * @param  dateA    first date to compare
 * @param  dateB    second date to compare
 * @return          boolean if dates are equal
 */
function datesAfter(dateA, dateB) {
    return (
        dateA instanceof Date &&
        dateB instanceof Date &&
        dateA.getTime() > dateB.getTime()
    );
}
