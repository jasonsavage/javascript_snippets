
/**
 * Get the current date and time formatted as:
 * Month/Day/Year Hours:Minutes:Seconds(AM|PM)
 * @returns {string}
 */
function getFormattedNow () {
	var now = new Date(),
	  m = (now.getMonth()+1),
	  d = now.getDate(),
	  y = now.getFullYear(),
		h = now.getHours(),
		mm = now.getMinutes(),
		s = now.getSeconds(),
		ampm = h >= 12 ? 'PM' : 'AM';
	
	// h = 0 - 24, convert it to 0 - 12, but if 0, then set it to 12 (am)
	h = h > 12 ? h - 12 : ( h === 0 ? 12 : h);
	
	return [m, '/', d, '/', y, ' ', h, ':', mm, ':', s, ampm].join('');
}
