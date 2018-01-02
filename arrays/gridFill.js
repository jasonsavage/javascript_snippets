export function gridFill (array, minRows, minCols) {
	// fill rows up to minRows value
	while (array.length < minRows) {
		array.push([]);
	}
	// loop through each row, and fill columns to minCols value
	return array.map((row) => arrayFill(row, minCols, () => null));
}
