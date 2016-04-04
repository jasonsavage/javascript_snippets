
/**
 * Parses the timespan of an event from total seconds to an object containing the days, hours, minutes, and seconds it occured.
 *
 * @params {number} totalSecond - the total time an event occured for in seconds
 * @return {object} - object with the properties: days, hours, minutes, seconds
 */
function parseTimespan(totalSecond) {
		let days        = Math.floor(totalSecond/24/60/60),
			hoursLeft   = Math.floor((totalSecond) - (days*86400)),
			hours       = Math.floor(hoursLeft/3600),
			minutesLeft = Math.floor((hoursLeft) - (hours*3600)),
			minutes     = Math.floor(minutesLeft/60),
			remainingSeconds = totalSecond % 60;

		return {
			days : days,
			hours : hours,
			minutes : minutes,
			seconds : remainingSeconds
		};
	}
