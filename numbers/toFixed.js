export function toFixed (val) {
	val = val || 0;
	return isInt(val) ? val : parseFloat(val.toFixed(2));
}
