function decimalPlaces (value, places) {
	value = ''+value; //to string
	var i = value.indexOf('.');
	if(i !== -1) {
		return value.substr(0, i) + value.substr(i, places+1);
	}
	return value;
}
