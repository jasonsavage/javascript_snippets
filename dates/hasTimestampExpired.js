export function hasTimestampExpired (lastTimeStamp, allowedInterval) {
	let now = timestamp();
	return (now - lastTimeStamp) >= allowedInterval;
}
