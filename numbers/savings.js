/**
 * Calculate savings based on number of years and percentage yield.
 * @param {number} years
 * @param {number} percentYield
 * @param {number} [initialBalance=0]
 * @param {number} [monthlyContribution=100]
 * @returns {number}
 */
function savings(years, percentYield, initialBalance, monthlyContribution) {
	initialBalance = initialBalance || 0;
	monthlyContribution = monthlyContribution || 100;
	
	var mi = percentYield / 1200,
		base = initialBalance;
    
	for (var i = 0; i < years * 12; i++) {
		base *= (1 + mi) + 1 * monthlyContribution;
	}
	return Math.floor(base * Math.pow(10,2)) / Math.pow(10,2);
}
