import { parseDuration } from './parseDuration';
import { zeroPrepend } from './zeroPrepend';

export function parseDurationAsTimecode (timestamp) {
	const duration = parseDuration(timestamp);
	let timeArr = [zeroPrepend(duration.minutes, 2), zeroPrepend(duration.seconds, 2)];

	if (duration.hours > 0) {
		timeArr.unshift(zeroPrepend(duration.hours, 2));
	}

	return timeArr.join(':');
}
