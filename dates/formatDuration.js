import parseDuration from './parseDuration';

/**
 * Builds a string of days(d) hours{h} minutes{m} seconds(s) from a timestamp
 * @param {number} timestamp
 * @returns {string}
 */
export function formatDuration (timestamp) {
	let times = parseDuration(timestamp),
		result = [
			times.days > 0 ? `${times.days}d` : '',
			times.hours > 0 ? `${times.hours}h` : '',
			times.minutes > 0 ? `${times.minutes}m` : '',
			times.seconds > 0 ? `${times.seconds}s` : ''
		]
			.join(' ')
			.trim();
	return result !== '' ? result : `0s`;
}
