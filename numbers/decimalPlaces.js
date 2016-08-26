function decimalPlaces (value, places) {
    value = ''+value;
    var i = value.indexOf('.');
    return (i !== -1) ? value.substr(0, i) + value.substr(i, places+1) : value;
}
