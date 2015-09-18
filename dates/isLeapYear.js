/**
 * Checks if the supplied year is a leap year.
 * @param {int} [year = current year]
 * @return {boolean}
 */
function isLeapYear (year) {
    year = year || new Date().getFullYear();
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
