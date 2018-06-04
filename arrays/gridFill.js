/**
 * Creates a multi-dimensional 'grid' array of rows and columns
 * @param {array} array - array to fill
 * @param {number} minRows - number of grid rows
 * @param {number} minCols - number of grid columns
 * @param {function} [createMethod=() => {}] - factory method to create the grid cell 
 */
export function gridFill (array, minRows, minCols, createMethod=()=>{}) {
	// fill rows up to minRows value
	while (array.length < minRows) {
		array.push([]);
	}
	// loop through each row, and fill columns to minCols value
	return array.map((row, i) => arrayFill(row, minCols, (j) => createMethod(i, j)));
}
