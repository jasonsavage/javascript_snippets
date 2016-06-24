
/**
 * Get the current date and time formatted as:
 * Month/Day/Year Hours:Minutes:Seconds(AM|PM)
 * @returns {string}
 */
function getFormattedNow () {
    var now = new Date(),
        h = now.getHours(),
        ampm = h < 12 ? 'AM' : 'PM';

    // h = 0 - 24, convert it to 0 - 12, but if 0, then set it to 12 (am)
    h = h > 12 ? h - 12 : ( h === 0 ? 12 : h);

    return [
        (now.getMonth()+1), '/',
        now.getDate(), '/',
        now.getFullYear(), ' ',
        h, ':',
        now.getMinutes(), ':',
        now.getSeconds(), ' ',
        ampm
	].join('');
}
