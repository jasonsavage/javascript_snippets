
/**
 * Gets a sorter that will sort an array of objects based on another array of strings and the given property
 * example: myArray.sort( getArrayBasedSorter(['cat','dog','fish'], 'varName') );
 *
 * @param  {array} sortOrderArray
 * @param  {string} prop
 * @return {function}
 */
function getArrayBasedSorter(sortOrderArray, prop) {
    return (a, b) => {
		  const indexA = sortOrderArray.indexOf(a[prop]);
		  const indexB = sortOrderArray.indexOf(b[prop]);
		  if(indexA === -1) { return 1; }
		  if(indexB === -1) { return -1; }
		  return indexA - indexB;
	  };
}
