function decimalPlaces(value) {
    if(isNaN(value)) {
        return 0;
    }
    var match = (''+value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    // Number of digits right of decimal point adjusting for scientific notation.
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}
