/**
 * Gets an array of days in the supplied month.
 * NOTE: does not add a day to February during a leap year
 * @param {int} [month = 0]
 * @return {array}
 */
function listDays(month) {
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    month = clamp(month || 0, 0, 11);
    for(var r = [], d = 0, e = daysInMonths[month]; d++ < e;) {
        r.push(d);
    }
    return r;
}
