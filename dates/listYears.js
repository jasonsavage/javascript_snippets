/**
 * Gets an array of years form (now + yearsAhead) to yearsAgo
 * @param {int} yearsAgo
 * @param {int} [yearsAhead = 0]
 * @returns {array}
 */
function listYears(yearsAgo, yearsAhead) {
    yearsAhead = yearsAhead || 0;
    for(var r = [], y = new Date().getFullYear() + (yearsAhead + 1), e = y - yearsAgo; y-- > e;) {
        r.push(y);
    }
    return r;
}
