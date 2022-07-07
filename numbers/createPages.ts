import {range} from 'ramda';

/**
 * Creates an array of page arrays which contain index numbers that can be used to lookup
 * items in a source array
 */
export const createPages = (itemsPerPage: number, totalItems: number): number[][] => {
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 4);
    const len = itemsPerPage * totalPages;
    const next: number[][] = [];
    const offset = -itemsPerPage;

    range(0, len).forEach((i) => {
        // infinite wrap if out of range
        const wrapIndex = clampWrap(offset + i, 0, totalItems - 1);
        // sort
        const groupIndex = Math.floor(i / itemsPerPage);
        next[groupIndex] = next[groupIndex] || [];
        next[groupIndex].push(wrapIndex);
    });
    return next;
};
