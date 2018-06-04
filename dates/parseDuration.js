/**
 * Returns a duration object from the specified timestamp in seconds
 * @param {number} timestamp
 * @returns {{days: number, hours: number, minutes: number, seconds}}
 */
export function parseDuration (timestamp) {
	let days, hours, minutes, seconds;
	seconds = Math.floor(timestamp / 1000);
	minutes = Math.floor(seconds / 60);
	seconds = seconds % 60;
	hours = Math.floor(minutes / 60);
	minutes = minutes % 60;
	days = Math.floor(hours / 24);
	hours = hours % 24;

	return { days, hours, minutes, seconds };
}
