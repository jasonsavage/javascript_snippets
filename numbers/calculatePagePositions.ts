import {range} from 'ramda';

/**
 * Calculates the x positions for each page
 */
export const calculatePagePositions = (
    pageCount: number,
    itemsPerPage: number,
    itemWidth: number
): number[] => {
    const pageWidth = itemWidth * itemsPerPage;
    const offset = -pageWidth;
    // calculate each items base position
    return range(0, Math.max(pageCount, 3)).map((i) => offset + i * pageWidth);
};
