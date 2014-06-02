"use_strict";

/**
 * Gets the month name or abbreviation by zero based index 
 * @param {Object} index
 * @param {Object} abbrev
 */
function getMonthName(index, abbreviation)
{
    abbreviation = (typeof abbreviation === 'boolean' && abbreviation);
    
    var abbrs = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
        names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    return abbreviation ? abbrs[ index ] : names[ index ];
}

Date.prototype.getMonthName = function(abbreviation)
{
    return getMonthName(this.getMonth(), abbreviation);
};