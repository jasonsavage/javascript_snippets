/**
 * Formats a timecode in milliseconds into '00:00'
 * @param {number} time - milliseconds
 * @param {number} timeToSubtract - milliseconds
 * @returns {string}
 */
export function prettyCountdown (time, timeToSubtract) {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;

	if (timeToSubtract && timeToSubtract > 0) {
		seconds = Math.max(seconds - timeToSubtract, 0);
	}

	return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
}
