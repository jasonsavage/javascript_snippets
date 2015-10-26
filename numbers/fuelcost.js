/**
 * Calculates a vehicals total fuel cost based on the current fuel 
 * rate per gallon, total miles, and the vehicals average mile per gallon.
 * @param {number} costPerGallon - cost of fuel per gallon
 * @param {number} totalMiles - how far the vehical is traveling
 * @param {number} milesPerGallon - the vehicals avarage miles per gallon
 * @return {number}
 */
function fuelCost(costPerGallon, totalMiles, milesPerGallon) {
	return (totalMiles * costPerGallon) / milesPerGallon;
}
